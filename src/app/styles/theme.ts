import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  palette: {
    background: {
      default: "#F1F3F7",
    },
    grey: {
      "100": "#F8F8F9",
      "200": "#F1F3F7",
      "300": "#CCCFDA",
      "400": "#9395B8",
      "500": "#7B7EA5",
      "600": "#353754",
      "700": "#06082C",
      "800": "#03051C",
    },
    primary: {
      main: "#0135B3",
    },
    secondary: {
      main: "#011595",
      "100": "#DD9529",
    },
    error: {
      main: "#D21010",
    },
    success: {
      main: "#38C972",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          width: 1180,
        },
      },
    },
  },
});
