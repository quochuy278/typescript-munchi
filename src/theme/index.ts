
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
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
});

export default theme;
