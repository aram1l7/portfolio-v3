import Layout from "@/components/Layout";
import React from "react";
import { jobHistory } from "@/mocks/job-history";
import { RoundedIcon } from "@/components/Icons";
import Head from "next/head";

const Details = ({ position, company, time, type, description, location }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <RoundedIcon />
      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <span className="capitalize text-primary dark:text-primaryDark">
            @{company}
          </span>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {location} | {type}
        </span>
        <p className="font-medium w-full md:text-sm">{description}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Learn about Aram Martirosyan's extensive experience as a full stack JavaScript engineer. From developing custom web applications to optimizing website performance, see how I have helped clients achieve their goals with my technical skills and problem-solving abilities."
        />
        <title>Aram M. | My journey</title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <h1
            className="inline-block text-dark dark:text-light
      font-bold w-full !text-6xl xl:!text-5xl text-center
      lg:!text-6xl md:!text-5xl sm:!text-3xl animate-fade sm:mb-8 mb-16"
          >
            My journey
          </h1>
          <div className="relative w-[75%] mx-auto lg:w-[90%] md:w-full mt-16">
            <div className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl"></div>
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
              {jobHistory.map((el) => {
                return <Details key={el.id} {...el} />;
              })}
            </ul>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Experience;
