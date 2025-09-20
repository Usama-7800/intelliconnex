import Faqs from "@/components/Faqs";
import Image from "next/image";
import React from "react";

export default function DigitalCreativesBanner() {
  return (
    <>
      <div className="bg-[#F8F8F8]">
        <header className="pt-12 md:pt-20 pb-8 md:pb-10 px-4 grid md:grid-cols-5 gap-10 md:px-5 xl:px-10 2xl:px-12 md:items-center main max-w-[1460px] w-full !mx-auto">
          <div className=" md:col-span-3 max-md:text-center flex flex-col max-md:justify-center md:!my-32">
            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold md:!leading-[75px]">
              Why RocketBox™ for <br />
              <span className="text-primary">Digital Creatives</span>
            </h1>
            <p className="text-lg lg:text-xl 3xl:text-[26px] text-light-gray mt-4 md:mt-6 max-w-xl font-normal">
              See how RocketBox™ solves challenges faced by consumer
              technology&apos;s most demanding users..
            </p>
          </div>
          <Image
            src={"/media/faqs/digital-creatives.webp"}
            width={320}
            height={80}
            quality={100}
            className="w-3/4 md:w-full max-w-[550px] h-auto max-md:mx-auto md:ml-auto rounded-md md:col-span-2"
            alt="Logo"
          />
        </header>
      </div>
    </>
  );
}
