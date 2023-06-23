import AnimatedNumbers from "@/components/AnimatedNumbers";
import Layout from "@/components/Layout";
import StackSlider from "@/components/StackSlider";
import { services } from "@/mocks/services";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const About = ({ totalContributions }) => {
  return (
    <>
      <Head>
        <title>Aram Martirosyan | About</title>
        <meta
          name="description"
          content="Get to know Aram Martirosyan, a skilled full stack JavaScript engineer with a passion for building web applications. Learn about my experience, skills, and approach to software development."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <h1
            className="inline-block text-dark dark:text-light
      font-bold w-full !text-6xl xl:!text-5xl xl:text-center
      lg:!text-6xl md:!text-5xl sm:!text-3xl animate-fade sm:mb-8 mb-16"
          >
            About me
          </h1>
          <div className="flex  items-center justify-between gap-12 xl:flex-col">
            <div className="relative min-w-[320px] min-h-[320px] sm:min-h-[160px] sm:min-w-[160px]">
              <Image
                src="/images/aram.png"
                className="h-auto rleative w-full rounded-full max-w-xs max-h-80 shadow-2xl object-cover"
                fill
                alt="Aram Martirosyan, web developer, freelancer, software engineer"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="flex flex-col gap-1 max-w-md">
              <p className="font-medium ">
                I am a passionate javascript developer with over 2.5 years of
                dedicated expertise in the industry.
              </p>
              <p className="my-2 font-medium">
                Collaboration and communication are essential values in my work
                approach. I am a proactive problem solver, always seeking
                innovative solutions and striving for code quality,
                maintainability, and performance optimization.
              </p>
              <p className="font-medium">
                With my strong foundation in React and Node, along with my keen
                eye for detail and dedication to delivering high-quality code, I
                am confident in my ability to contribute to the success of any
                software development project. I am excited to continue pushing
                the boundaries of web development and leveraging my expertise to
                create exceptional user experiences.
              </p>
            </div>
            <div className="flex justify-center flex-col gap-5">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={totalContributions} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  github contributions
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
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

          <section>
            <h1
              className="inline-block text-right mt-32 text-dark dark:text-light
        font-bold w-full !text-6xl xl:!text-5xl xl:text-center
        lg:!text-6xl md:!text-5xl sm:!text-3xl animate-fade sm:mb-8 mb-16"
            >
              Tech stack
            </h1>
            <StackSlider />
          </section>
          <section>
            <h1
              className="inline-block mt-32 text-dark dark:text-light
        font-bold w-full !text-6xl xl:!text-5xl xl:text-center
        lg:!text-6xl md:!text-5xl sm:!text-3xl animate-fade sm:mb-8 mb-16"
            >
              Services I do
            </h1>
            <div className="grid mt-12 grid-cols-3 lg:grid-cols-2 sm:!grid-cols-1 gap-x-8 gap-y-12">
              {services.map((el) => {
                return (
                  <div
                    className="flex duration-300 ease-in transition-transform hover:scale-110 flex-col justify-center items-center gap-6"
                    key={el.id}
                  >
                    <div className="w-28">
                      <Image
                        width={112}
                        height={112}
                        className="dark:invert"
                        src={el.img}
                      />
                    </div>
                    <span className="font-semibold">{el.title}</span>
                  </div>
                );
              })}
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default About;

export const getServerSideProps = async () => {
  const { data } = await axios({
    url: `https://api.github.com/graphql`,
    method: "post",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    data: {
      query: `
      query($userName:String!) { 
        user(login: $userName){
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
   `,
      variables: {
        userName: "aram1l7",
      },
    },
  });
  let {
    contributionsCollection: { contributionCalendar },
  } = data.data.user;
  console.log(contributionCalendar, "data");

  return {
    props: {
      totalContributions: contributionCalendar.totalContributions,
    },
  };
};
