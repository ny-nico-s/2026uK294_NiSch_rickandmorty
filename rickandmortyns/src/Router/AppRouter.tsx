import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CharacterCreatePage from "../Pages/CharacterCreatePage";
import CharacterDetailPage from "../Pages/CharacterDetailPage";
import CharacterEditPage from "../Pages/CharacterEditPage";
import CharacterListPage from "../Pages/CharacterListPage";
import LoginPage from "../Pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <CharacterListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/characters/new"
          element={
            <ProtectedRoute>
              <CharacterCreatePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/characters/:id"
          element={
            <ProtectedRoute>
              <CharacterDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/characters/:id/edit"
          element={
            <ProtectedRoute>
              <CharacterEditPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
