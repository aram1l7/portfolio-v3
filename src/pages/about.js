import AnimatedNumbers from "@/components/AnimatedNumbers";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <h1
          className="inline-block text-dark dark:text-light
      font-bold w-full !text-6xl xl:!text-5xl 
      lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl animate-fade sm:mb-8 mb-16"
        >
          About me
        </h1>
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2  md:col-span-8">
            <p className="font-medium ">
              Hi, my name is <strong>Aram</strong>, I am a passionate developer
              with over 3 years of dedicated expertise in the web industry.
            </p>
            <p className="my-4 font-medium">
              Collaboration and communication are essential values in my work
              approach. I am a proactive problem solver, always seeking
              innovative solutions and striving for code quality,
              maintainability, and performance optimization.
            </p>
            <p className="font-medium">
              With my strong foundation in React and Node, along with my keen
              eye for detail and dedication to delivering high-quality code, I
              am confident in my ability to contribute to the success of any
              software development project. I am excited to continue pushing the
              boundaries of web development and leveraging my expertise to
              create exceptional user experiences.
            </p>
          </div>
          <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1 ">
            <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light"></div>
            <Image
              src="/images/aram.png"
              className="h-auto w-full rounded-2xl"
              width={1920}
              height={2345}
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row  xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={500} />+
              </span>
              <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                github contributions
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={3} />+
              </span>
              <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                years of experience
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={30} />+
              </span>
              <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                completed projects
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default About;
