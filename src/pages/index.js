import AnimatedTitle from "@/components/AnimatedTitle";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aram M. | Web Developer</title>
        <meta
          name="description"
          content="I am Aram Martirosyan, a full stack software engineer with expertise in building web applications with React.js/Node.js. I am open to freelance and remote opportunities. Contact me today."
        />
      </Head>
      <section className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <Layout className="pt-0 md:!px-4">
          <div className="flex w-full items-center justify-center flex-col max-w-5xl mx-auto text-center">
            <AnimatedTitle
              variant={"h1"}
              className="inline-block text-dark dark:text-light
      font-bold w-full !text-5xl xl:!text-4xl 
         md:!text-3xl sm:!text-2xl animate-fade"
              text="Hi, my name is Aram."
            />

            <AnimatedTitle
              variant={"h2"}
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
                className="button border-none ease-in duration-200 transition-colors font-medium 
                cursor-pointer px-6 py-3 border rounded-md text-white group 
                shadow-xl bg-primary shadow-pink-300 dark:bg-primaryDark dark:shadow-teal-300
                active:shadow-lg active:translate-x-0.5 active:translate-y-0.5
                "
              >
                Explore more
              </Link>
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
}
