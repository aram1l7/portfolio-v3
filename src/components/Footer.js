import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { GithubIcon, InstaIcon, LinkedInIcon } from "./Icons";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base ">
      <Layout className="py-8 flex justify-between items-center">
        <span>Copyright &copy; {new Date().getFullYear()} By Aram.</span>
        <div className="flex gap-4 items-center">
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
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
