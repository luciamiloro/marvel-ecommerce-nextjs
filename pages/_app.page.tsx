import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import {theme} from "dh-marvel/styles/material-theme";

function MyApp({ Component, pageProps }: AppProps) {

  const Layout = (Component as any).Layout || LayoutGeneral
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <style jsx global>{`
              /* Other global styles such as 'html, body' etc... */

              #__next {
                height: 100%;
              }
            `}</style>
  </ThemeProvider>
}

export default MyApp
