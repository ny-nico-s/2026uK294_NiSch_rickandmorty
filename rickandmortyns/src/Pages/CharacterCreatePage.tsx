import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterForm from "../Components/Organisms/CharacterForm";
import type { CharacterFormValues } from "../Components/Organisms/CharacterForm";
import PageLayout from "../Components/Templates/PageLayout";
import { createCharacter } from "../Services/RickAndMortyService";
import { toDateInput, toIso } from "../Utils/Date";

function CharacterCreatePage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (
    values: CharacterFormValues,
  ): Promise<void> => {
    try {
      setErrorMessage("");
      await createCharacter({
        name: values.name,
        created: toIso(values.created),
      });
      navigate("/");
    } catch {
      setErrorMessage("Character could not be created.");
    }
  };

  return (
    <PageLayout title="New Character">
      {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
      <CharacterForm
        initialValues={{
          name: "",
          created: toDateInput(new Date().toISOString()),
        }}
        onSubmit={handleSubmit}
      />
    </PageLayout>
  );
}

export default CharacterCreatePage;
