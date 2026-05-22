import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/Organisms/LoginForm";
import { login } from "../Services/AuthService";
import type { LoginCredentials } from "../Types/Auth";

function LoginPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (
    credentials: LoginCredentials,
  ): Promise<void> => {
    try {
      setErrorMessage("");
      await login(credentials);
      navigate("/");
    } catch {
      setErrorMessage("Login fehlgeschlagen. E-Mail oder Passwort falsch.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
      </Paper>
    </Container>
  );
}

export default LoginPage;
