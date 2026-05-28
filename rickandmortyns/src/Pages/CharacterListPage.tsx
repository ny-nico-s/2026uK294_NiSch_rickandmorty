import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Atoms/Button";
import CharacterList from "../Components/Organisms/CharacterList";
import PageLayout from "../Components/Organisms/PageLayout";
import { getCharacters } from "../Services/RickAndMortyService";
import type { Character } from "../Types/Character";

function CharacterListPage() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadCharacters = async (): Promise<void> => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch {
        setErrorMessage("Characters could not be loaded.");
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacters();
  }, []);

  return (
    <PageLayout title="Rick and Morty">
      <Stack spacing={2}>
        <Button
          size="small"
          color="success"
          onClick={() => navigate("/characters/new")}
        >
          New Character
        </Button>
        {isLoading ? <CircularProgress /> : null}
        {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
        {!isLoading && !errorMessage ? (
          <CharacterList characters={characters} />
        ) : null}
      </Stack>
    </PageLayout>
  );
}

export default CharacterListPage;
