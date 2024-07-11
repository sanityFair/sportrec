import { Container } from "@mui/material";
import { ErrorBoundary } from "@/shared/ui";
import { Navigate, Outlet } from "react-router-dom";
import { AppBar } from "../app-bar";

export const App = () => {
  return (
    <ErrorBoundary fallback={<Navigate to="/error" />}>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </ErrorBoundary>
  );
};
