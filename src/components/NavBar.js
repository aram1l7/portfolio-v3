import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import {
  GithubIcon,
  InstaIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./Icons";
import ThemeContext from "@/theme/ThemeProvider";
import { useRouter } from "next/router";

const NavBar = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();

  console.log(router.asPath, "asPAth");
  return (
    <header
      className="
      w-full flex items-center justify-between 
      px-32 py-8 font-medium z-10 dark:text-light
      lg:px-16 relative z-1 md:px-12 sm:px-8"
    >
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center gap-8">
          <Link
            className="rounded relative group lg:text-light lg:dark:text-dark "
            href={"/"}
          >
            Home
            <span
              className={`
              inline-block h-[1px] ${
                router.asPath === "/" ? "w-full" : "w-0"
              }  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease-in duration-300 dark:bg-light
               lg:bg-light lg:dark:bg-dark
              `}
            ></span>
          </Link>
          <Link
            className="rounded relative group lg:text-light lg:dark:text-dark"
            href={"/about"}
          >
            About
            <span
              className={`
              inline-block h-[1px] ${
                router.asPath === "/about" ? "w-full" : "w-0"
              }  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
               lg:bg-light lg:dark:bg-dark
              `}
            ></span>
          </Link>
          <Link
            className="rounded relative group lg:text-light lg:dark:text-dark"
            href={"/projects"}
          >
            Projects
            <span
              className={`
              inline-block h-[1px] ${
                router.asPath === "/projects" ? "w-full" : "w-0"
              }  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
               lg:bg-light lg:dark:bg-dark
              `}
            ></span>
          </Link>
        </nav>
        <nav className="flex items-center justify-center flex-wrap lg:mt-2 gap-4">
          <Link
            className="hover:translate-y-[-4px] transition-transform duration-200 ease-in"
            href={"https://github.com/aram1l7"}
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            className="hover:translate-y-[-4px] transition-transform duration-200 ease-in"
            href={"https://instagram.com/aram333____"}
            target="_blank"
          >
            <InstaIcon />
          </Link>
          <Link
            className="hover:translate-y-[-4px] transition-transform duration-200 ease-in"
            href={"https://www.linkedin.com/in/aram-m19/"}
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <button
            className={
              "rounded-full p-1 border-none "
            }
            onClick={toggle}
          >
            {mounted && (theme === "light" ? <SunIcon /> : <MoonIcon />)}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
