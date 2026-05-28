import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharacterForm from "../Components/Organisms/CharacterForm";
import type { CharacterFormValues } from "../Components/Organisms/CharacterForm";
import PageLayout from "../Components/Organisms/PageLayout";
import {
  getCharacterById,
  updateCharacter,
} from "../Services/RickAndMortyService";
import type { Character } from "../Types/Character";
import { toDateInput, toIso } from "../Utils/Date";

function CharacterEditPage() {
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

  const handleSubmit = async (
    values: CharacterFormValues,
  ): Promise<void> => {
    try {
      setErrorMessage("");
      await updateCharacter(Number(id), {
        name: values.name,
        created: toIso(values.created),
      });
      navigate(`/characters/${id}`);
    } catch {
      setErrorMessage("Character could not be saved.");
    }
  };

  return (
    <PageLayout title="Edit Character">
      {isLoading ? <CircularProgress /> : null}
      {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
      {character ? (
        <CharacterForm
          initialValues={{
            name: character.name,
            created: toDateInput(character.created),
          }}
          onSubmit={handleSubmit}
        />
      ) : null}
    </PageLayout>
  );
}

export default CharacterEditPage;
