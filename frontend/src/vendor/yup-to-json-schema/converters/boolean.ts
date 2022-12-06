import type { JSONSchema7 } from "json-schema";
import type Converter from "./Converter";
import commonMetadata from "./commonMetadata";

const booleanConverter: Converter = (boolean) => {
  const jsonSchema: JSONSchema7 = {};
  commonMetadata(boolean, jsonSchema);
  return jsonSchema;
};

export default booleanConverter;
