import type { JSONSchema7 as Schema } from "json-schema";
import type Converter from "./Converter";
import lodash from "lodash";
import commonMetadata from "./commonMetadata";

const { merge } = lodash;

function metaHasDescription(meta: unknown): meta is { description: string } {
  return typeof meta === "object" && meta != null && "description" in meta;
}

const mixedConverter: Converter = (mixed, typeMap) => {
  let jsonSchema: Schema = {};
  // type
  const yupType = mixed.type;
  jsonSchema.type = typeMap.getJsonSchemaType(yupType);

  const mixedDescription = mixed.describe();

  if (mixedDescription.oneOf?.length > 0) {
    // @ts-expect-error oneof is assigned to enum
    jsonSchema.enum = mixedDescription.oneOf;
  }

  if (mixedDescription.notOneOf?.length > 0) {
    jsonSchema.not = {
      // @ts-expect-error notoneof is assigned to enum
      enum: mixedDescription.notOneOf,
    };
  }

  const meta = mixedDescription.meta;
  if (metaHasDescription(meta) && meta.description) {
    jsonSchema.description = meta.description;
  }

  /* @todo default is not supported yet
  const _default = mixed.getDefault();
  if (_default) {
    jsonSchema.default = _default;
  }
   */

  const converter = typeMap.getConverter(yupType);
  const typeSpecificSchema = converter(mixed, typeMap);

  jsonSchema = merge(jsonSchema, typeSpecificSchema);
  commonMetadata(mixed, jsonSchema);
  return jsonSchema;
};

export default mixedConverter;
