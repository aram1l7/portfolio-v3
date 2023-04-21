import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BulbIcon } from "./Icons";
import ThemeContext from "@/theme/ThemeProvider";
import { useRouter } from "next/router";

const NavBar = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const themeSwitcher = (
    <button className={"rounded-full p-1 border-none "} onClick={toggle}>
      {mounted && (
        <BulbIcon
          className={`${theme === "light" ? "fill-yellow-300" : ""} `}
        />
      )}
    </button>
  );

  const nav = (
    <>
      <Link
        className="rounded relative group dark:text-light text-dark w-fit"
        href={"/"}
      >
        Home
        <span
          className={`
              inline-block h-[1px] ${
                router.asPath === "/" ? "w-full" : "w-0"
              }  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease-in duration-300 dark:bg-light
               
              `}
        ></span>
      </Link>
      <Link
        className="rounded relative group dark:text-light text-dark w-fit"
        href={"/about"}
      >
        About
        <span
          className={`
              inline-block h-[1px] ${
                router.asPath === "/about" ? "w-full" : "w-0"
              }  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
               
              `}
        ></span>
      </Link>
      <Link
        className="rounded relative group dark:text-light text-dark w-fit"
        href={"/work"}
      >
        Work
        <span
          className={`
              inline-block h-[1px] ${
                router.asPath === "/work" ? "w-full" : "w-0"
              }  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
               
              `}
        ></span>
      </Link>

      <Link
        className="rounded relative group dark:text-light text-dark w-fit"
        href={"/experience"}
      >
        Experience
        <span
          className={`
              inline-block h-[1px] ${
                router.asPath === "/experience" ? "w-full" : "w-0"
              }  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
               
              `}
        ></span>
      </Link>
    </>
  );

  return (
    <>
      <header
        className="
      w-full flex z-[999] items-center justify-between 
      px-32 py-8 font-medium dark:text-light
      lg:px-16 relative z-1 md:px-12 sm:px-8"
      >
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav className="flex items-center justify-center gap-8">{nav}</nav>

          {themeSwitcher}
        </div>
        <div className="w-full justify-end items-center hidden lg:flex">
          {themeSwitcher}
        </div>
      </header>
      <div className="w-5 fixed left-[80px] top-[42px] z-[9999] hidden lg:flex">
        <input
          type="checkbox"
          className="hidden box-border transition-all duration-200 ease-linear"
          id="openSidebarMenu"
          onChange={() => setIsOpen(!isOpen)}
        />

        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1 bg-black dark:bg-white"></div>
          <div className="spinner horizontal bg-black dark:bg-white"></div>
          <div className="spinner diagonal part-2 bg-black dark:bg-white"></div>
        </label>
      </div>
      <div
        className={`z-[500] top-0 dark:bg-dark bg-light pt-12 px-4 text-black-light dark:text-gray-light
           h-full left-0 w-64 dark:bg-black-smoke shadow-md
            bg-main fixed transition-transform ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-[257px]"
            }`}
        id="sidebarMenu"
      >
        <div className="flex flex-col gap-6 mt-24 pl-14">{nav}</div>
      </div>
    </>
  );
};

export default NavBar;
