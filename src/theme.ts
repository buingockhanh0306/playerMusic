import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
  }
}

export const theme = createTheme({
  shape:{
    borderRadius: 16
  },
  typography: {
    fontFamily: "Roboto, Hiragino Kaku Gothic Pro",
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    fontSize: 12,
  },
  palette: {
    primary: {
      light: "#757de8",
      main: "#F4F5FE",
      dark: "#002984",
    },
    info: {
      main: "rgba(33, 150, 243, 1)",
    },
    background: {
      default: "rgba(247, 247, 247, 1)",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.86)",
      secondary: "rgba(0, 0, 0, 0.6)",
    },
    divider: "rgba(0, 0, 0, 0.23)",
  },
  breakpoints: {
    keys: ["lg"],
    values: {
      lg: 1160,
      xl: 1440,
    },
  },
  components: {
    MuiTablePagination: {
      styleOverrides: {
        selectLabel: {
          fontSize: 12,
          fontStyle: "normal",
          lineHeight: "19.92px",
          fontWeight: "Regular",
          fontColor: "rgba(0, 0, 0, 0.6)",
        },
        displayedRows: {
          fontSize: 12,
          fontStyle: "normal",
          lineHeight: "19.92px",
          fontWeight: "Regular",
          fontColor: "rgba(0, 0, 0, 0.6)",
        },
      },
    },
  },
});
