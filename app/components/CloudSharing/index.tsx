import React from "react";
import Image from "next/image";

export default function CloudSharing() {
  return (
    <section className="lg:gap-24 md:gap-16 lg:mb-24 lg:mt-0 lg:pt-10 flex flex-col pt-0 mb-10 md:mb-20 px-6 ">
      {/* Local Data Transfer  section */}
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-4 md:gap-16 my-8  md:my-0 ">
        <div className=" flex justify-center order-1 lg:order-2 ">
          <Image
            src="/media/cloud-sharing.webp"
            width={500}
            height={500}
            alt="Picture of the author"
            className="  w-[80%] -mt-10 "
          />
        </div>
        <div className="lg:max-w-[628px] order-2 lg:order-1  ">
          <div className="text-light-gray space-y-4 md:mr-8 text-base  xxl:text-xl ">
            <p className="text-orange-500 mt-2 text-xl coxl:text-3xl font-semibold">
              Cloud Sharing:
            </p>
            <p>
              Cloud file storage and sharing services offer crucial remote
              teamwork by allowing real-time sharing among teams.
            </p>
            <p>
              Many Consumers and Creatives will also leverage cloud storage as a
              critical backup for personal and creative files.
            </p>
            <p>
              Serious Digital Creators, however, maintain cloud platforms for
              collaborative working files while relying on local setups to
              transfer and store raw, high resolution files. Local storage and
              sharing are critical to address file size and sensitivity
              concerns. Balancing the two arrangements, a hybrid strategy can
              offer maximum capabilities while addressing issues such as
              bandwidth limits, costs, and managing large data in cloud storage.
            </p>
            <p className="text-orange-500 mt-2 font-semibold">
              Ultimately, cloud storage is primarily for sharing files, not
              daily workflows or long-term backup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
