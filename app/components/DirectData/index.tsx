import React from "react";
import Image from "next/image";

export default function DirectData() {
  return (
    <section
      id="are-you-ready"
      className="lg:gap-24 md:gap-16 lg:mb-40 lg:mt-0 lg:pt-0 flex flex-col pt-0 mb-10 md:my-20 px-4 md:px-4 lg:px-6"
    >
      {/* Local Data Transfer  section */}
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-4 md:gap-20 my-8  md:my-0 md:px-2">
        <div className=" flex justify-center  order-1 ">
          <Image
            src="/media/direct-data.webp"
            width={500}
            height={500}
            alt="Picture of the author"
            className=" w-full -mt-10 "
          />
        </div>

        <div className="  order-2 ">
          <h2 className=" relative mb-2 lg:mb-6 text-2xl coxl:text-3xl xl:text-4xl xxl:text-[40px] font-bold !leading-snug">
            Eliminate the Wait with <br />
            <span className="text-orange-500 mt-2 ">Direct Data Transfers</span>
          </h2>
          <div className="text-light-gray space-y-4 md:mr-8 text-base  md:text-xl ">
            <p>Say goodbye to sluggish connections and bottlenecks.</p>
            <p>
              <strong className="text-neutral-700">IntelliConnex</strong> makes
              file transfers and system connectivity effortless. By eliminating
              the complexities slowing your productivity and creativity, our
              patented technology removes data delays common to Ethernet
              switches.
            </p>

            <p>
              Our platforms move data between connections 20,000X faster than a
              traditional consumer Ethernet network switch, and 3X faster than
              the world’s fastest Data Center switches.
            </p>
            <p className="text-orange-500 mt-2 font-semibold">
              Access your data across all your systems without the wait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
