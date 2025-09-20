"use client";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:mb-20  -mb-20  px-6 z-30 ">
      <div className="flex flex-col lg:gap-8 gap-4 items-center justify-center mt-16 lg:mt-20 lg:mb-16">
        <span className="lg:text-base text-sm font-bold lg:-mb-4">
          Coming soon
        </span>
        <h1 className="lg:text-6xl text-2xl font-extrabold text-center">
          World’s <span className="text-orange-500">Fastest & Simplest</span>{" "}
          data platform
          <br /> connecting all your Systems
        </h1>
        <span className="lg:text-2xl lg:mx-0 lg:opacity-100 opacity-70 mx-4 text-center">
          The First & Only USB data exchange platform.
          {/* <br className="lg:hidden" /> Limitlesspossibilities. */}
        </span>
        <div className="lg:flex-row lg:w-fit lg:px-0 lg:mt-0 lg:font-normal flex flex-col w-full gap-4 px-10 mt-4 font-bold">
          <a
            href="mailto:contact@intelliconnex.com"
            className="rounded-full flex justify-center py-2 text-sm lg:text-base lg:py-1.5 px-10 border-orange-500 border lg:ring ring-orange-500/20 hover:border-orange-500/20 hover:scale-105 transition-all duration-500"
          >
            Get in touch
          </a>
          <button
            onClick={() =>
              document
                .querySelector("#are-you-ready")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full py-2 text-sm lg:text-base lg:py-1.5 px-10 bg-zinc-600 text-white lg:shadow-lg hover:bg-zinc-700 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="-z-10 bg-[url(/media/home-banner-2025.webp)]  w-[1020px] h-[340px] sm:mt-10 md:mt-20 lg:mt-0 -translate-y-20 max-w-full bg-center bg-contain bg-no-repeat lg:translate-x-4" />
    </section>
  );
};
