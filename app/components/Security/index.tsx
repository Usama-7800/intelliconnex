"use client";
import Image from "next/image";

export const Security = () => {
  return (
    <section className="lg:flex-row lg:gap-24 lg:mt-40 mt-24 lg:mb-40 flex flex-col-reverse items-start gap-6 mb-24">
      <div className="lg:text-xl flex flex-col flex-1 gap-6">
        <h2 className="lg:text-4xl lg:mb-6 text-2xl font-bold leading-snug">
          Complete Privacy and Data Security
        </h2>
        <b className="text-[#000]">
          Content stays safe and protected within your trusted workspace.
        </b>
        <p>
          Beginning with total data security, IntelliConnex opens up the
          potential for Intelligent data exchange with complete control across
          every endpoint.
        </p>
        <p>
          Rest easy knowing that your data stays off the internet grid.
          Universal local direct connections ensure secure and private data
          exchange. No more vulnerabilities, concerns about data breaches,
          internet exposures or public footprints.
        </p>
        <button
          onClick={() => {
            const subscribeField = document.querySelector(
              "#subscription-field"
            ) as HTMLElement;
            subscribeField?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            setTimeout(() => {
              subscribeField?.focus();
            }, 500);
          }}
          className="rounded-full flex justify-center mr-auto py-2 text-sm lg:text-base lg:py-1.5 px-10 border-orange-500 border lg:ring ring-orange-500/20 hover:border-orange-500/20 transition-all duration-500 mt-2"
        >
          Get Started
        </button>
      </div>
      <div className="flex items-center self-stretch justify-center flex-1 aspect-[2/1]">
        <Image
          src={"/media/security.png"}
          width={576}
          height={432}
          alt="secured-system"
        />
      </div>
    </section>
  );
};
