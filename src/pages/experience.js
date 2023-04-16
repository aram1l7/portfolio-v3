import Layout from "@/components/Layout";
import React from "react";
import { jobHistory } from "@/mocks/job-history";

const Details = ({ position, company, time, type, description, location }) => {
  return (
    <li>
      <div>
        <h3>
          {position} @{company}
        </h3>
        <span>
          {time} | {location} | {type}
        </span>
        <p>{description}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <h1
          className="inline-block text-dark dark:text-light
      font-bold w-full !text-6xl xl:!text-5xl xl:text-center
      lg:!text-6xl md:!text-5xl sm:!text-3xl animate-fade sm:mb-8 mb-16"
        >
          My journey
        </h1>
        <div className="relative w-[75%] mx-auto lg:w-[90%] md:w-full mt-16">
          {jobHistory.map((el) => {
            return <Details key={el.id} {...el} />;
          })}
        </div>
      </Layout>
    </main>
  );
};

export default Experience;
