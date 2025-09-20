"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string[];
  paragraphs: string[];
  imagePath: string;
  boldPara2?: string;
  reverseOrder?: boolean;
  backImage?: boolean;
  boldPara?: boolean;
  boldParagraph?: string;
  showButton?: "button1" | "button2"; // 👈 now string instead of boolean
};

export const Performance = ({
  title,
  paragraphs,
  imagePath,
  reverseOrder,
  boldPara2,
  backImage = true,
  showButton,
  boldParagraph,
  boldPara = false, // default to false
}: Props) => {
  const lastPara = paragraphs[paragraphs.length - 1];
  const otherParas = paragraphs.slice(0, -1);

  return (
    <section
      id="are-you-ready"
      className="lg:gap-24 md:gap-16 lg:mb-20 mt-0  lg:mt-0 lg:pt-0 flex flex-col pt-0 mb-10 md:my-20 px-6 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-4 md:gap-20 my-8  md:my-0 ">
        <div
          className={`order-2 lg:gap-6 flex flex-col flex-1 gap-4 self-stretch justify-center ${
            reverseOrder ? "md:order-2" : "md:order-1"
          }`}
        >
          <h2 className=" text-2xl coxl:text-3xl xl:text-4xl xxl:text-[40px] !leading-snug  font-bold relative flex flex-col justify-center">
            {title.map((heading, idx) => (
              <span
                key={idx}
                className={idx === title.length - 1 ? "text-orange-500" : ""}
              >
                {heading}
              </span>
            ))}
            {backImage && (
              <Image
                src="/triangle.svg"
                width="236"
                height="236"
                alt="triangle"
                className={`absolute h-40 w-40 md:w-[236px] md:h-[236px] -z-10 -left-20 md:-left-28  ${
                  reverseOrder ? "md:-mt-14" : "md:-mt-12"
                }`}
              />
            )}
          </h2>
          {boldPara && (
            <p>
              <b>Ultra-Low Power</b> operation and{" "}
              <b>Zero Energy Idle States</b> reduce operating costs and offer a
              real step to reduce global ICT energy use.
            </p>
          )}
          <p>{boldPara2}</p>
          {boldParagraph && (
            <b className="lg:-mt-2 text-base  md:text-xl ">{boldParagraph}</b>
          )}

          {otherParas.map((para, idx) => (
            <p
              key={idx}
              className="lg:-mt-2 text-light-gray text-base  md:text-xl "
            >
              {para}
            </p>
          ))}

          {lastPara?.trim() && (
            <p className="lg:-mt-2 text-base  md:text-xl  text-orange-500">
              {lastPara}
            </p>
          )}

          {showButton === "button1" && (
            <Link
              href="#subscription-field"
              className="rounded-xl flex justify-center mr-auto py-2 text-sm lg:text-base lg:py-1.5 px-16 border-orange-500 border lg:ring ring-orange-500/20 hover:border-orange-500/20 transition-all duration-500 mt-8"
            >
              Get Started
            </Link>
          )}

          {showButton === "button2" && (
            <Link
              href="/your-target-route"
              className="text-orange-500 hover:underline font-medium text-sm"
            >
              Learn more&gt;&gt;
            </Link>
          )}
        </div>

        <div
          className={`order-1 rounded-3xl self-stretch flex-1 relative flex items-center justify-center overflow-hidden h-[200px]  md:h-[400px] lg:h-[500px]  ${
            reverseOrder ? "lg:order-1" : "lg:order-1"
          }`}
        >
          <Image
            className="object-contain w-full h-full mb-0  md:mb-0    "
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
