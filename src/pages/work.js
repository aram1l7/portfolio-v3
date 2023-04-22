import Layout from "@/components/Layout";
import { projects } from "@/mocks/projects";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const Work = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover Aram Martirosyan's portfolio of web development projects. From front-end designs to back-end functionality, see how I bring innovative ideas to life with my expertise in React, Node.js, Express.js, and more."
        />
        <title>Aram M. | Works</title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <h1
            className="inline-block text-dark dark:text-light
      font-bold w-full !text-6xl xl:!text-5xl text-right
      lg:!text-6xl md:!text-5xl sm:!text-3xl animate-fade sm:mb-8 mb-16"
          >
            My works
          </h1>
          <div className="grid grid-cols-3 overflow-hidden lg:grid-cols-2 sm:!grid-cols-1 gap-4">
            {projects.map((el, i) => {
              return (
                <motion.a
                  target="_blank"
                  href={el.link}
                  className="cursor-pointer select-none overflow-hidden group relative flex items-center justify-center"
                  key={el.id}
                  initial={{
                    opacity: 0,
                    translateX: i % 2 === 0 ? 120 : 360,
                    translateY: -50,
                  }}
                  animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <div
                    style={{ background: "rgba(0, 0, 0, 0.6)" }}
                    className="absolute w-full h-full opacity-0
                  grid place-items-center
                  group-hover:opacity-100 z-50 ease-in text-white duration-300 transition-opacity"
                  >
                    <div className="flex flex-col gap-2 items-center">
                      <h3 className="font-medium text-2xl tracking-wide flex gap-2 items-center">
                        {el.title}
                      </h3>
                    </div>
                  </div>
                  <div className="w-full lg:h-full h-72">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out"
                      src={el.img}
                      alt={el.alt}
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Work;
