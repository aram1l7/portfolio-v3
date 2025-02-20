import { dictionary } from "@/locales";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { query, pathname, push } = router;

  const [safeLang, setSafeLang] = useState("en");

  const supportedLangs = ["en", "ru"];
  const [isLangReady, setIsLangReady] = useState(false); 

  const isValidLang = (lang) => supportedLangs.includes(lang);

  useEffect(() => {
  
    const queryLang = query.lang || "en";
    if (isValidLang(queryLang)) {
      setSafeLang(queryLang); 
      localStorage.setItem("lang", queryLang); 
    } else {
      setSafeLang("en");
      localStorage.setItem("lang", "en");
      router.replace({ pathname, query: { ...query, lang: "en" } }, undefined, {
        shallow: true,
      });
    }
    setIsLangReady(true); 
  }, [query.lang]); 

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang && isValidLang(savedLang)) {
      setSafeLang(savedLang);
    } else {
      setSafeLang("en");
      localStorage.setItem("lang", "en");
    }
    setIsLangReady(true); 
  }, []); 

   if (!isLangReady) {
    return null; 
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
