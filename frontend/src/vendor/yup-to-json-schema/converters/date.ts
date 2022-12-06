import type { JSONSchema7 } from "json-schema";
import type Converter from "./Converter";
import commonMetadata from "./commonMetadata";

const dateConverter: Converter = (date) => {
  const jsonSchema: JSONSchema7 = { format: "date-time" };

  commonMetadata(date, jsonSchema);
  return jsonSchema;
};

export default dateConverter;
