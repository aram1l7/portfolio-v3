import React from "react";
import Layout from "./Layout";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base ">
      <Layout className="!py-8 flex justify-between items-center md:!pt-4 xl:!px-12 md:!p-4 xs:flex-col xs:gap-3">
        <span className="select-none flex items-center">
          &copy; {new Date().getFullYear()} by
          &#x1D49C;&#x1D4C7;&#x1D4B6;&#x1D4C2;
          <span className="text-primary animate-pulse ml-2 text-2xl">
            &#x2665;
          </span>
        </span>
        <span>
          <a href="mailto:aram18m@gmail.com">aram18m@gmail.com</a>
        </span>
      </Layout>
    </footer>
  );
};

export default Footer;
