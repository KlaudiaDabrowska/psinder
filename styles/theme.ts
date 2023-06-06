import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: "#EFE9F4" },
    },
    typography: {
      fontFamily: "Lato, sans-serif",
    },
  }),
  { factor: 4 }
);

// declare module "@mui/material/styles" {
//   interface Palette {
//     white: Palette["primary"];
//     secondaryText: Palette["secondary"];
//   }

//   interface PaletteOptions {
//     white: PaletteOptions["primary"];
//     secondaryText: PaletteOptions["secondary"];
//   }
// }
