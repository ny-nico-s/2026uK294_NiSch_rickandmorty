import { useField } from "formik";
import TextInput from "../Atoms/TextInput";

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
};

function FormField({ label, name, type = "text" }: FormFieldProps) {
  const [field, meta] = useField(name);
  const showError = meta.touched && Boolean(meta.error);

  return (
    <TextInput
      id={name}
      label={label}
      type={type}
      error={showError}
      helperText={showError ? meta.error : " "}
      {...field}
    />
  );
}

export default FormField;
