"use client";
import Image from "next/image";
import { useState } from "react";

export const AreYouReady = () => {
  const [active, setActive] = useState("LOW ENERGY");

  const buttons = [
    "FASTER",
    "EASIER TO USE",
    "POWER SOURCE",
    "LESS CLUTTER",
    "LOW ENERGY",
  ];
  return (
    <section
      id="are-you-ready"
      className="lg:gap-24 md:gap-16 lg:mb-20 lg:mt-0 lg:pt-0 flex flex-col pt-0 md:mb-10 md:my-20 px-6"
    >
      {/* button section  */}
      <div className="flex flex-wrap items-start justify-between gap-4 md:gap-8 w-full bg-red">
        {buttons.map((label) => {
          const isActive = active === label;
          return (
            <div
              key={label}
              className="flex flex-col flex-wrap flex-1 gap-6 w-full"
            >
              <button
                onClick={() => setActive(label)}
                className={`rounded-2xl min-w-[120px] flex-[1_1_calc(33.333%-16px)] text-sm lg:text-base ring flex-grow w-full py-3 border cursor-default ${
                  isActive
                    ? "ring-green-500/20 text-[#829F64] border-[#829F64]"
                    : "ring-orange-500/20 text-orange-500 border-orange-500"
                }`}
              >
                {label}
              </button>
            </div>
          );
        })}
      </div>
      {/* RocketBox  section */}
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-4 md:gap-16 my-8  md:my-8 ">
        <div className="lg:max-w-[628px] order-2 lg:order-1 ">
          <h2 className=" relative mb-2 lg:mb-6  text-2xl coxl:text-3xl xl:text-4xl xxl:text-[40px] font-bold space-y-6 xxl:!leading-tight">
            <span className="text-orange-500  md:mb-4  block ">
              RocketBox
              <span className="text-[8px] md:text-sm relative bottom-4 ">
                TM
              </span>{" "}
              is built for <br />
            </span>
            Multisystem environments.
          </h2>
          <div className="text-light-gray space-y-4 md:mr-8 text-base  xxl:text-xl ">
            <p>
              More and more, consumers use more than one computing system.
              Digital Creatives lead this trend.
            </p>
            <p>
              The most popular digital creative workspace has at least two
              primary systems - a desktop and a laptop - often adding one or two
              more devices for specific purposes.
            </p>
            <p>
              Industry-wide trends show an emphasis on flexibility, performance,
              and reliability, where having multiple devices is essential for
              staying competitive and creative in the fast-changing digital
              environment.
            </p>
            <span className="text-orange-500 mt-2 block font-medium">
              From Digital Creatives to everyday Consumer computing, multiple
              systems is the new normal.
            </span>
          </div>
        </div>
        <Image
          src="/media/firefly.webp"
          width={500}
          height={500}
          alt="Picture of the author"
          className="order-1 lg:order-2 w-full "
        />
      </div>
    </section>
  );
};
