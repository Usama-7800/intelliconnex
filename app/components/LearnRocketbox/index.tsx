import React from "react";
import Image from "next/image";

export default function LearnRocketbox() {
  return (
    <section className="lg:gap-24 md:gap-16 lg:mb-10 lg:mt-0 lg:pt-0 flex flex-col pt-0 mt-10 md:mt-0   px-6 ">
      {/* Local Data Transfer  section */}
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-4 md:gap-16 my-4  md:my-0">
        <div className=" flex justify-center order-1  ">
          <Image
            src="/media/learn-rocketbox.webp"
            width={500}
            height={500}
            alt="Picture of the author"
            className="  w-full  "
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:max-w-[600px] order-2 mx-auto ">
          <div className="flex flex-col items-center text-light-gray gap-8 md:mr-8 text-base coxl:text-xl text-center">
            <p className="text-2xl coxl:text-3xl xl:text-4xl xxl:text-[34px] font-semibold text-black !leading-snug">
              Learn how RocketBox™ transforms the world of the Digital Creative
            </p>
            <p>
              Growing file stores, larger files and multiple systems: You
              deserve a simpler, more powerful platform to connect your digital
              workflows.
            </p>
            <button className="px-8 py-3 rounded-full bg-primary text-white text-xl xxl:text-2xl">
              Transform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
