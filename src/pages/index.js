import AnimatedTitle from "@/components/AnimatedTitle";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <Layout className="pt-0 md:!px-4">
          <div className="flex w-full items-center justify-center flex-col max-w-5xl mx-auto text-center">
            <AnimatedTitle
              className="inline-block text-dark dark:text-light
      font-bold w-full !text-5xl xl:!text-4xl 
         md:!text-3xl sm:!text-2xl animate-fade"
              text="Hi, my name is Aram."
            />

            <AnimatedTitle
              className="inline-block mt-3 text-dark dark:text-light
              font-bold w-full !text-6xl xl:!text-5xl 
               lg:!text-6xl md:!text-5xl sm:!text-3xl animate-fade max-w-3xl"
              text={"I build web experiences that stand out."}
            />

            <p className="my-4 text-base font-medium md:text-sm sm:!text-xs max-w-xl">
              Specializing in web development for modern businesses, I deliver
              custom solutions that leverage the latest technologies and best
              practices to achieve measurable results and business growth.
            </p>
            <div className="mt-2 flex items-center self-center">
              <Link
                href="/about"
                className="font-medium cursor-pointer border group 
                dark:hover:border-white dark:bg-white dark:text-black 
                  flex gap-2 items-center hover:bg-white dark:hover:bg-black dark:hover:text-white
                 hover:text-black hover:border-black px-6 py-3 bg-black text-white
                   tracking-wider ease-in duration-200 transition-colors rounded-md"
              >
                Explore more
                <div className="w-4 h-4 dark:invert-0 dark:group-hover:invert invert group-hover:invert-0">
                  <img src="/images/arrow.svg" alt="arrow" />
                </div>
              </Link>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
