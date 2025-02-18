import { dictionary } from "@/locales";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { query, pathname, push } = router;

  const lang = query.lang || "en";

  return (
    <div className="min-h-screen flex flex-col justify-center bg-light pb-4">
      <main
        className={`flex-grow flex relative flex-row lg:flex-col items-center justify-center gap-16`}
      >
        <Component {...pageProps} />
      </main>
      <footer className="text-center text-gray-500 text-base xs:px-8 xs:text-sm">
        © {new Date().getFullYear()} {dictionary[lang].footerText}
      </footer>
    </div>
  );
}
