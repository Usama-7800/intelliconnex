import React from "react";
import Image from "next/image";

export default function LocalDataTransfer() {
  return (
    <section
      id="are-you-ready"
      className="lg:gap-24 md:gap-16 lg:mb-20 lg:mt-0 lg:pt-0 flex flex-col pt-0 mb-10 md:my-20 px-6"
    >
      {/* Local Data Transfer  section */}
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-4 md:gap-16 my-8  md:my-0">
        <div className="lg:max-w-[628px] order-2  ">
          <h2 className="lg:text-4xl relative mb-2 lg:mb-6 text-2xl xl:text-4xl xxl:text-[40px] font-bold !leading-snug">
            {/* <div className="mb-4"> */}
            Do more with{" "}
            <span className="text-orange-500  my-2 ">
              Local Data Transfer
            </span>{" "}
            {/* </div> */}
            versus Cloud Sharing
          </h2>
          <div className="text-light-gray space-y-4 md:mr-8 text-base  xxl:text-xl  ">
            <p className="text-orange-500 mt-2 text-2xl font-semibold">
              Localized Data platforms:
            </p>
            <p>
              Serious creatives advocate for local file exchange, particularly
              for high-resolution videos, 3D assets, and raw photos, where speed
              and control are crucial.
            </p>
            <p>
              Using a local arrangement—like NAS systems or external
              drives—offers reduced latency, better oversight of storage and
              backups, and improved reliability for editing tasks.
            </p>
            <p>
              For most, local networks are also preferred for long-term
              archiving and large file editing due to concerns over the
              performance and security of cloud storage.
            </p>
            <p className="text-orange-500 mt-2 font-semibold">
              RocketBox<span className="text-[8px] relative bottom-4 ">TM</span>{" "}
              is the fastest, simplest and most powerful local connection
              platform for exchanging large files between all your systems.
            </p>
          </div>
        </div>
        <div className=" flex justify-center ">
          <Image
            src="/media/Local-Data-Transfer.webp"
            width={500}
            height={500}
            alt="Picture of the author"
            className="order-1  w-[80%] -mt-10 "
          />
        </div>
      </div>
    </section>
  );
}
