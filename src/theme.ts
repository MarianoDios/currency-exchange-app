import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    brand: {
      deepBlue: string;
      purple: string;
      lightGray: string;
      lightPurple: string;
      darkPurple: string;
    };
  }
  interface PaletteOptions {
    brand?: {
      deepBlue?: string;
      purple?: string;
      lightGray?: string;
      lightPurple?: string;
      darkPurple?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6C2CF5",
      dark: "#4B1DB8",
    },
    secondary: {
      main: "#0A0E2A",
    },
    brand: {
      deepBlue: "#06083F",
      purple: "#6439FF",
      lightGray: "#F5F5F5",
      lightPurple: "#E5E5FF",
      darkPurple: "#4B1DB8",
    },
    background: {
      default: "#ffffff",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
});
