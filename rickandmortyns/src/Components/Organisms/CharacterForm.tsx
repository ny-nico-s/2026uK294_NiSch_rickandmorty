import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Atoms/Button";
import FormField from "../Molecules/FormField";

export type CharacterFormValues = {
  name: string;
  created: string;
};

type CharacterFormProps = {
  initialValues: CharacterFormValues;
  onSubmit: (values: CharacterFormValues) => Promise<void>;
  errorMessage?: string;
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  created: Yup.string().required("Date is required"),
});

function CharacterForm({
  initialValues,
  onSubmit,
  errorMessage,
}: CharacterFormProps) {
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
            <FormField label="Name" name="name" />
            <FormField label="Created" name="created" type="date" />
            {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
            <Button type="submit" disabled={isSubmitting}>
              Save
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default CharacterForm;
