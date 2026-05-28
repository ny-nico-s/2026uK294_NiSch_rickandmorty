import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Components/Atoms/Button";
import PageLayout from "../Components/Organisms/PageLayout";
import {
  deleteCharacter,
  getCharacterById,
} from "../Services/RickAndMortyService";
import type { Character } from "../Types/Character";

function CharacterDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadCharacter = async (): Promise<void> => {
      try {
        const data = await getCharacterById(Number(id));
        setCharacter(data);
      } catch {
        setErrorMessage("Character could not be loaded.");
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacter();
  }, [id]);

  const handleDelete = async (): Promise<void> => {
    if (!window.confirm("Really delete this character?")) {
      return;
    }
    try {
      await deleteCharacter(Number(id));
      navigate("/");
    } catch {
      setErrorMessage("Character could not be deleted.");
    }
  };

  return (
    <PageLayout title="Character Detail">
      {isLoading ? <CircularProgress /> : null}
      {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
      {character ? (
        <Stack spacing={2}>
          <Typography variant="h5">{character.name}</Typography>
          <Typography>ID: {character.id}</Typography>
          <Typography>
            Created: {new Date(character.created).toLocaleString()}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              size="small"
              color="primary"
              onClick={() => navigate(`/characters/${character.id}/edit`)}
            >
              Edit
            </Button>
            <Button size="small" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Stack>
          <Button size="small" color="secondary" onClick={() => navigate("/")}>
            Back to list
          </Button>
        </Stack>
      ) : null}
    </PageLayout>
  );
}

export default CharacterDetailPage;
