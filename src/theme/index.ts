
import { createTheme, hexToRgb } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF3537",
      light: "rgb(255, 53, 55, 0.5)",
      dark: "rgb(255, 53, 55, 0.8)",
      contrastText: "rgb(16, 16, 18, 0.9);",
    },
    secondary: {
      main: "#101012",
      light: "F5F5F6",
      dark: "#E7E7E7",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "rgb(35, 197, 82, 1)",
    },
    info: {
      main: "rgb(52, 120, 246, 1)",
    },
    grey: {
      "800": "rgb(16, 16, 18, 0.9)",
      "700": "rgb(16, 16, 18, 0.5)",
      "600": "rgb(16, 16, 18, 0.15)",
      "300": "#E7E7E7",
      "200": "F5F5F6",
      "100": "#FFFFFF",
    },
  },
});

export default theme;
