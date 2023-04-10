import { ContactIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <Layout className="pt-0 md:!px-4">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:!inline-block md:w-full">
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
      lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl animate-fade"
                >
                  Crafting Interactive Experiences with Pixel Perfect Precision.
                </h1>
              </div>
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                Empowering businesses with expertise in React.js, Node.js, and
                cutting-edge web development. Explore my latest projects
                showcasing my expertise in React.js and web development.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <a
                  href="mailto:aram18m@gmail.com"
                  className="font-medium border dark:hover:border-white dark:border-black 
                  flex gap-2 items-center hover:bg-white
                 hover:text-black hover:border-black px-6 py-3 bg-black text-white
                   tracking-wider ease-in duration-200 transition-colors rounded-md"
                >
                  Contact me
                  <ContactIcon />
                </a>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
