import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import type { Character } from "../../Types/Character";

type CharacterListProps = {
  characters: Character[];
};

function CharacterList({ characters }: CharacterListProps) {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map(({ id, name, created }) => (
            <TableRow
              key={id}
              hover
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/characters/${id}`)}
            >
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{new Date(created).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CharacterList;
