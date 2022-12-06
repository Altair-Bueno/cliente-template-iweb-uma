import yupToJsonSchema from "@sodaru/yup-to-json-schema";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

interface FormProps {
  formData: any;
  scheme: any;
}

export function YupForm({ formData, scheme }: FormProps) {
  const jsonScheme = yupToJsonSchema(scheme);
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
