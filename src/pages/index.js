/* eslint-disable @next/next/no-img-element */
import { dictionary } from "@/locales";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({ initialLang }) {
  const router = useRouter();
  const { query, pathname, push } = router;

  const onChangeLang = (lng) => {
    push({ pathname, query: { ...query, lang: lng } }, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    const lang = initialLang || localStorage.getItem("lang") || "en";
    if (initialLang !== lang) {
      router.replace({ query: { ...query, lang } }, undefined, {
        shallow: true,
      });
    }
  }, [query.lang]);

  useEffect(() => {
    if (query.lang) {
      localStorage.setItem("lang", query.lang);
    }
  }, [query.lang]);

  const lang = query.lang || "en";

  return (
    <>
      <Head>
        <title>Aram Martirosyan</title>
        <meta
          name="description"
          content="I am Aram Martirosyan, a full stack software engineer with expertise in building web applications with React.js/Node.js. I am open to freelance and remote opportunities. Contact me today."
        />
      </Head>
      <div className="absolute top-10 right-10 md:top-4 md:right-4 flex gap-4 items-center">
        <div
          onClick={() => onChangeLang("en")}
          className="w-6 h-4 cursor-pointer shadow-md"
        >
          <img
            alt="english"
            className={`w-full h-full object-cover ${
              lang === "en" ? "border border-red-600" : ""
            }`}
            src="/images/flag-en.svg"
          />
        </div>
        <div
          onClick={() => onChangeLang("ru")}
          className="w-6 h-4 cursor-pointer shadow-md"
        >
          <img
            alt="russian"
            className={`w-full h-full object-cover ${
              lang === "ru" ? "border border-red-600" : ""
            }`}
            src="/images/flag-ru.svg"
          />
        </div>
      </div>
      <div className="flex p-4 md:p-10 h-full flex-row lg:flex-col items-center justify-center gap-16">
        <section className="flex flex-col justify-center items-center gap-6">
          <div className="relative overflow-hidden rounded-full min-w-[300px] shadow-md shadow-gray-600 min-h-[300px] sm:min-h-[220px] sm:min-w-[220px]">
            <Image
              src="/images/aram.jpg"
              className="h-auto scale-150 relative w-full object-top max-w-md max-h-80 object-contain"
              fill
              alt="Aram Martirosyan, web developer, freelancer, software engineer"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
        </section>
        <section className="basis-1/2 flex flex-col gap-2 max-w-xl">
          <div className="flex flex-col gap-2 max-w-max">
            <span className="font-bold font-sans text-3xl tracking-wide">
              {dictionary[lang].name}
            </span>
            <hr className="w-full border-t-2" />
            <p className="text-lg font-medium">{dictionary[lang].role}</p>
            <p className="font-semibold">{dictionary[lang].aboutMe}</p>
          </div>
          <p className="text-base">{dictionary[lang].info}</p>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">{dictionary[lang].contactMe}</p>
            <p
              dangerouslySetInnerHTML={{ __html: dictionary[lang].contactHtml }}
            ></p>
          </div>
          <div>
            <p className="font-semibold">Resume</p>
            <a
              href={`/aram_m_resume_${lang}.pdf`}
              download
              className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
            >
              {`aram_m_resume_${lang}.pdf`}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const lang = context.query.lang || "en";
  return {
    props: {
      initialLang: lang,
    },
  };
};
