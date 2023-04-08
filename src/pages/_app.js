import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/theme/ThemeProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen h-full`}
      >
        <NavBar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
