import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Atoms/Button";
import { logout } from "../Services/AuthService";

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    logout();
    navigate("/login");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Rick and Morty
      </Typography>
      <Typography gutterBottom>Eingeloggt. Die Liste folgt in Teil 2.</Typography>
      <Button onClick={handleLogout}>Abmelden</Button>
    </Container>
  );
}

export default HomePage;
