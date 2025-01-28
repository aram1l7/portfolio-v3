import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

import { ThemeProvider } from "@/theme/ThemeProvider";
import Footer from "@/components/Footer";


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      {/* <main
        className={`bg-light dark:bg-dark w-full min-h-[80vh] h-full`}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main> */}
      <h1>temporary unavailable</h1>
    </ThemeProvider>
  );
}
