import React from "react";
import Image from "next/image";

export default function PortableConnectivity() {
  return (
    <section
      id="are-you-ready"
      className="lg:gap-24 md:gap-16  lg:mb-20 lg:mt-28 lg:pt-0 flex flex-col pt-0 mb-10 md:my-20 px-6"
    >
      {/* Local Data Transfer  section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 coxl:gap-32 justify-center items-end gap-4 md:gap-20 my-8  md:my-0 ">
        <div className=" flex justify-center  ">
          <Image
            src="/media/portable-connectivity.webp"
            width={500}
            height={500}
            alt="Picture of the author"
            className=" w-full -mt-10 "
          />
        </div>

        <div className="  ">
          <h2 className="relative mb-2 lg:mb-6 text-2xl coxl:text-3xl xl:text-4xl xxl:text-[40px] !leading-snug font-bold flex flex-col gap-1">
            <span>
              Work wherever you are <br />
            </span>
            <span className="text-orange-500 mt-2 ">Portable Connectivity</span>
          </h2>
          <div className="text-light-gray space-y-4 md:mr-8 text-base  md:text-xl ">
            <p>
              Imagine having access to private high speed data connectivity
              everywhere you go.
            </p>
            <p>
              Whether it is at work, at school or even at the coffee shop, only
              RocketBox™ delivers the highest data transfer speeds in a highly
              portable high-speed transfer platform that can be used anywhere.
            </p>

            <p>
              Private wireline transfers ensure your data is never exposed,
              making collaboration more secure.
            </p>
            <p className="text-orange-500 mt-2 ">
              Your work isn’t limited to your desk, why should your network
              connectivity?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
