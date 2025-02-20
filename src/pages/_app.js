import { dictionary } from "@/locales";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { query, pathname, push } = router;

  const [safeLang, setSafeLang] = useState("en");

  const supportedLangs = ["en", "ru"]; // Define your supported languages
  const [isLangReady, setIsLangReady] = useState(false); // To track when language is ready

  const isValidLang = (lang) => supportedLangs.includes(lang);

  useEffect(() => {
    // Get lang from query or fallback to 'en'
    const queryLang = query.lang || "en";

    // Check if lang is valid and update state accordingly
    if (isValidLang(queryLang)) {
      setSafeLang(queryLang); // Set valid language
      localStorage.setItem("lang", queryLang); // Save to localStorage
    } else {
      setSafeLang("en"); // Fallback to 'en' if invalid
      localStorage.setItem("lang", "en"); // Save 'en' to localStorage
      router.replace({ pathname, query: { ...query, lang: "en" } }, undefined, {
        shallow: true,
      });
    }
    setIsLangReady(true); 
  }, [query.lang]); // Trigger when query.lang changes

  useEffect(() => {
    // Get the lang from localStorage if available
    const savedLang = localStorage.getItem("lang");

    // If there's no lang saved in localStorage, default to 'en'
    if (savedLang && isValidLang(savedLang)) {
      setSafeLang(savedLang);
    } else {
      setSafeLang("en");
      localStorage.setItem("lang", "en"); // Default to 'en' in localStorage
    }
    setIsLangReady(true); 
  }, []); // This runs once when the component mounts

   if (!isLangReady) {
    return null; // Return nothing until the language is set
  }

  return (
    <div className="min-h-screen flex flex-col justify-center bg-light pb-4">
      <main
        className={`flex-grow flex relative flex-row lg:flex-col items-center justify-center gap-16`}
      >
        <Component
          {...pageProps}
          lang={safeLang}
          onChangeLang={(lang) => {
            setSafeLang(lang);

            push({ pathname, query: { ...query, lang } }, undefined, {
              shallow: true,
            });
          }}
        />
      </main>
      <footer className="text-center text-gray-500 text-base xs:px-8 xs:text-sm">
        © {new Date().getFullYear()} {dictionary[safeLang].footerText}
      </footer>
    </div>
  );
}
