import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Cursor from "@/components/Cursor/Cursor";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        {/* <Cursor /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
