import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Atoms/Button";
import FormField from "../Molecules/FormField";
import type { LoginCredentials } from "../../Types/Auth";

type LoginFormProps = {
  onSubmit: (credentials: LoginCredentials) => Promise<void>;
  errorMessage?: string;
};

const initialValues: LoginCredentials = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Ungültige E-Mail-Adresse")
    .required("E-Mail ist erforderlich"),
  password: Yup.string()
    .min(6, "Passwort muss mindestens 6 Zeichen haben")
    .required("Passwort ist erforderlich"),
});

function LoginForm({ onSubmit, errorMessage }: LoginFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack spacing={2}>
            <FormField label="E-Mail" name="email" type="email" />
            <FormField label="Passwort" name="password" type="password" />
            {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
            <Button type="submit" disabled={isSubmitting}>
              Anmelden
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
