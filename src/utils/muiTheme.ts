import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#2B2727",
      paper: "#121212",
    },
  },
  spacing: 12,
  shape: {
    borderRadius: 5,
  },
});
