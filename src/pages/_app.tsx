import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Component/template/Layout";
import {ThemeProvider} from "@mui/material";
import {theme} from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </ThemeProvider>

  );
}

export default MyApp;
