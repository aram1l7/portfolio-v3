import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
      <Layout>
        <div className="flex w-full items-start justify-between md:flex-col">
          <div className="w-1/2 lg:hidden md:inline-block md:w-full">
            <Image
              width={580}
              height={580}
              src="/images/dev.png"
              className="w-full h-auto"
            />
          </div>
          <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
            <div
              className="py-2 w-full mx-auto flex flex-col items-center 
            justify-center  text-center overflow-hidden sm:py-0"
            >
              <h1
                className="inline-block text-dark dark:text-light
      font-bold w-full !text-left !text-6xl xl:!text-5xl 
      lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              >
                Crafting Interactive Experiences with Pixel Perfect Precision!
              </h1>
            </div>
            <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              Empowering businesses with expertise in React.js, Node.js, and
              cutting-edge web development. Explore my latest projects
              showcasing my expertise in React.js and web development.
            </p>
          </div>
        </div>
      </Layout>
    </article>
  );
}
