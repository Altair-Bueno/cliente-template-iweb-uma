import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { zodToJsonSchema } from "zod-to-json-schema";

interface FormProps {
  formData: any;
  scheme: any;
  name: string;
}

export default function ZodForm({ formData, scheme, name }: FormProps) {
  const jsonScheme = zodToJsonSchema(scheme, name);
  return (
    <Form
      schema={jsonScheme}
      validator={validator}
      formData={formData}
      idPrefix={""}
      idSeparator={""}
    />
  );
}
