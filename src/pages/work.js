import Layout from "@/components/Layout";
import { projects } from "@/mocks/projects";
import React from "react";

const Work = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <h1
          className="inline-block text-dark dark:text-light
      font-bold w-full !text-6xl xl:!text-5xl text-right
      lg:!text-6xl md:!text-5xl sm:!text-3xl animate-fade sm:mb-8 mb-8"
        >
          My works
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {projects.map((el) => {
            return (
              <div key={el.id}>
                <span>{el.title}</span>
              </div>
            );
          })}
        </div>
      </Layout>
    </main>
  );
};

export default Work;
