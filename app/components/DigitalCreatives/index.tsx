import React from "react";
import Image from "next/image";

export default function DigitalCreatives() {
  return (
    <section
      id="are-you-ready"
      className="lg:gap-24 md:gap-16 lg:mb-20 lg:mt-0 lg:pt-0 flex flex-col pt-0 mb-10 md:my-20 px-6"
    >
      {/* Local Data Transfer  section */}
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-4 md:gap-20 my-8  md:my-0 ">
        <div className=" flex justify-center order-1 lg:order-2 ">
          <Image
            src="/media/digital-creatives.webp"
            width={500}
            height={500}
            alt="Picture of the author"
            className=" w-full -mt-10 "
          />
        </div>

        <div className="order-2 lg:order-1  ">
          <h2 className=" relative mb-2 lg:mb-6 text-2xl coxl:text-3xl xl:text-4xl xxl:text-[40px] !leading-snug font-bold ">
            Performance vs. Cost <br />
            <span className="text-orange-500 mt-2 ">
              Connectivity for Digital Creatives
            </span>
          </h2>
          <div className="text-light-gray space-y-4 md:mr-8 text-base  md:text-xl ">
            <p>
              Most independent creatives and small studios opt for mid‑range
              multi‑gig solutions (e.g., 2.5–10 GbE) rather than
              enterprise‑grade setups.
            </p>
            <p>
              This typically keeps their total investment in networking
              (including switches and adapters) in the $500–$2,000 range.
            </p>
            <div className="text-light-gray text-base md:text-lg 2xl:text-2xl">
              <p className=" mb-2">RocketBox™ Solutions Add Value By:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Reducing overall cost</li>
                <li>Making networks easier to use</li>
                <li>Requiring less hardware</li>
                <li>Enhancing portability</li>
                <li>Improving workflows through explosive data speeds</li>
              </ul>
            </div>
            <p className="text-orange-500 mt-2 font-semibold">
              Never compromise! <br />– RocketBox™ delivers More Performance and
              Lower Cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
