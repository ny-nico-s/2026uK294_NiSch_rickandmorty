import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
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
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
