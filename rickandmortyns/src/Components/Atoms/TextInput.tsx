import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

function TextInput({ ...rest }: TextFieldProps) {
  return <TextField fullWidth variant="outlined" {...rest} />;
}

export default TextInput;
