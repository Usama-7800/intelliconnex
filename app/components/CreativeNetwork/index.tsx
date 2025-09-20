import React from "react";
import Image from "next/image";

export default function CreativeNetwork() {
  return (
    <section
      id="are-you-ready"
      className="lg:gap-24 md:gap-16 lg:mb-40 lg:mt-0 lg:pt-0 flex flex-col pt-0 mb-10 md:my-20 px-6"
    >
      {/* Local Data Transfer  section */}
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-end gap-4 md:gap-20 my-8  md:my-0 ">
        <div className=" flex justify-center order-1 lg:order-2 ">
          <Image
            src="/media/rocketbox-value.webp"
            width={500}
            height={500}
            alt="Picture of the author"
            className=" w-full mb-4 "
          />
        </div>

        <div className="order-2 lg:order-1  ">
          <h2 className=" relative mb-2 lg:mb-6 text-2xl coxl:text-3xl xl:text-4xl xxl:text-[40px] font-bold !leading-snug">
            Extraordinary Value to fit <br />
            <span className="text-orange-500 mt-2 ">
              Creative Network Budgets
            </span>
          </h2>
          <div className="text-light-gray space-y-4 md:mr-8 text-base  md:text-xl ">
            <p>
              Informal surveys in online creative communities, like Adobe forums
              and Reddit indicate independent creatives and small studios
              usually have a modest budget for networking equipment in relation
              to their total production costs.
            </p>
            <p>
              Community discussions suggest between $500 and $2,000; the ideal
              range being $1,000 to $1,500 for 4 systems.
            </p>
            <p className="text-orange-500 mt-2 text-center">
              Wired vs Wireless
            </p>
            <p>
              Despite the convenience of Wireless networks, more and more
              digital creatives opt for a wired solution as their activities
              grow.
            </p>
            <p>
              Industry researchers and experts (including Parks Associates and
              McKinsey), estimate{" "}
              <strong className="text-neutral-700">
                20–30% of Emerging Creatives
              </strong>{" "}
              opt for a dedicated wired network solution. This rises to{" "}
              <strong className="text-neutral-700">
                40 to 50% for Independent Creatives
              </strong>{" "}
              whose business has begun to get more serious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
