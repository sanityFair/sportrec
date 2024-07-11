import { ErrorBoundary } from "@/shared/ui";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/app/styles";
import { queryClient } from "@/shared/api";
import { QueryClientProvider } from "react-query";

export const Providers = ({ children }: { children: JSX.Element }) => (
  <ErrorBoundary fallback={<>Something wrong</>}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);
