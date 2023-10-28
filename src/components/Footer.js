import React from "react";
import Layout from "./Layout";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base ">
      <Layout className="!py-8 flex justify-between items-center md:!pt-4 xl:!px-12 md:!p-4 xs:flex-col xs:gap-3">
        <span className="select-none flex items-center">
          &copy; {new Date().getFullYear()} by
          &#x1D49C;&#x1D4C7;&#x1D4B6;&#x1D4C2;
        </span>
        <div className="flex gap-3 items-center">
          <a
            target="_blank"
            className="w-6 h-6 group"
            href="mailto:aram18m@gmail.com?subject=Software Engineer"
          >
            <img
              className="group-hover:translate-y-[-5px] duration-200 ease-out transition-transform"
              src="/images/social/gmail.svg"
            />
          </a>
          <a
            target="_blank"
            className="w-6 h-6 group"
            href="https://www.linkedin.com/in/aram-m19/"
          >
            <img
              className="group-hover:translate-y-[-5px] duration-200 ease-out transition-transform"
              src="/images/social/linkedin.svg"
            />
          </a>

          <a
            target="_blank"
            className="w-6 h-6 group"
            href="https://github.com/aram1l7"
          >
            <img
              className="dark:invert group-hover:translate-y-[-5px] duration-200 ease-out transition-transform"
              src="/images/social/github.svg"
            />
          </a>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
