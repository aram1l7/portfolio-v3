import React from "react";
import Layout from "./Layout";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base ">
      <Layout className="py-8 flex justify-between items-center xl:!p-12 md:!p-4 xs:flex-col xs:gap-3">
        <span>Copyright &copy; {new Date().getFullYear()} By Aram.</span>
        <span>
          <a href="mailto:aram18m@gmail.com">aram18m@gmail.com</a>
        </span>
      </Layout>
    </footer>
  );
};

export default Footer;
