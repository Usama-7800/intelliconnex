"use client";
import Image from "next/image";

type Props = {
  title: string[];
  paragraphs: string[];
  imagePath: string;
  reverseOrder?: boolean;
  backImage?: boolean;
  trianglePosition?: "left" | "right";
  addSpace?: string;
};

export const CallToAction = ({
  title,
  paragraphs,
  imagePath,
  reverseOrder,
  trianglePosition = "left", // Default to "left"
  backImage = true, // default to true
  addSpace,
}: Props) => {
  return (
    <section className="lg:gap-24 md:gap-16 lg:mb-24 lg:mt-0 lg:pt-10 flex flex-col pt-0 mb-10 md:mb-20 px-6 -my-40 md:my-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-0 md:gap-16 my-8  md:my-0 ">
        <div
          className={`order-2 lg:gap-12 flex flex-col flex-1 gap-4 self-stretch justify-center ${
            reverseOrder ? "md:order-2" : "md:order-1"
          }`}
        >
          <h2 className="text-2xl coxl:text-3xl xl:text-4xl xxl:text-[40px]  font-bold relative flex flex-col justify-center !leading-snug">
            {title.map((heading, idx) => (
              <span
                key={idx}
                className={
                  idx === title.length - 1
                    ? "text-orange-500 font-semibold"
                    : ""
                }
              >
                {heading}
              </span>
            ))}
            {backImage && (
              <Image
                src="/triangle.svg"
                width={236}
                height={236}
                alt="triangle"
                className={`absolute h-40 w-40  md:w-[236px] md:h-[236px] -z-10 ${
                  trianglePosition === "left"
                    ? reverseOrder
                      ? "-left-20 md:-left-20 md:-mt-10"
                      : "-left-20 md:-left-32 md:-mt-12"
                    : trianglePosition === "right"
                    ? "-left-20 md:left-10 lg:left-52 xl:left-[27rem]"
                    : ""
                }`}
              />
            )}
          </h2>
          <div className={`lg:max-w-xl space-y-5 md:space-y-7 ${addSpace} `}>
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={`lg:-mt-6 text-base  md:text-xl  text-light-gray ${
                  idx === paragraphs.length - 1
                    ? "text-orange-500 font-semibold"
                    : ""
                }`}
              >
                {para}
              </p>
            ))}
          </div>
          {/* <button
            onClick={() => {
              const subscribeField = document.querySelector(
                "#subscription-field"
              ) as HTMLElement;
              subscribeField?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
              setTimeout(() => {
                subscribeField?.focus();
              }, 500);
            }}
            className="rounded-full flex justify-center mr-auto py-2 text-sm lg:text-base lg:py-1.5 px-10 border-orange-500 font-semibold border lg:ring ring-orange-500 font-semibold/20 hover:border-orange-500 font-semibold/20 transition-all duration-500"
          >
            Get Started
          </button> */}
        </div>

        <div
          className={` order-1 rounded-3xl self-stretch flex-1 relative flex items-center justify-center overflow-hidden -mb-8 h-[350px] coxs:h-[400px]  xs:h-[500px] sm:h-[540px] comd:h-[650px] md:h-[500px]  ${
            reverseOrder ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image
            className="object-contain w-full h-full"
            width={1400}
            height={1400}
            src={`/media/${imagePath}`}
            alt="Data Transfer IntelliConnex"
          />
        </div>
      </div>
    </section>
  );
};
