import Image from "next/image";

export const UsbC = () => {
  return (
    <section
      id="are-you-ready"
      className="lg:gap-24 md:gap-16 lg:mb-20 lg:mt-32 lg:pt-0 flex flex-col pt-0 mb-10 md:my-20 px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-4 md:gap-16 my-8  md:my-0">
        <div className="order-2 lg:order-1 lg:text-xl flex flex-col flex-1 gap-6">
          <h2 className="relative lg:mb-6 text-2xl coxl:text-3xl xl:text-4xl xxl:text-[40px] font-bold !leading-normal">
            Built for all your Systems <br />
            <span className="text-orange-500 mt-2 ">
              Universal Connectivity
            </span>
            <Image
              src="/triangle.svg"
              width={236}
              height={236}
              alt=""
              className="absolute h-40 w-40 md:w-[236px] md:h-[236px] -mt-32 md:-mt-44 z-10 -left-20 md:-left-28"
            />
          </h2>
          <div className="lg:max-w-xl space-y-7 text-light-gray text-base md:text-xl ">
            <p>
              With tens of billions of connectable systems, USB-C is the world’s
              favorite and most capable connectivity platform. Designed to reach{" "}
              <span className="text-neutral-700">120 Gbps</span> with existing
              cables and connectors, our platform will connect all your systems
              no matter the manufacturer or operating system.
            </p>
            <p>
              USB-C also means{" "}
              <span className="text-orange-500">USB Power Delivery</span>{" "}
              options are available to provide a single solution to all your
              system needs.
            </p>
            <p>
              And because its built on USB, connect any USB-enabled mobile
              phone, tablet, laptop or PC with easy-to-find conversion cables or
              adapters.
            </p>
            <p className="text-orange-500 mt-2 font-semibold">
              Only RocketBox
              <span className="text-[8px] relative bottom-4 ">TM</span> natively
              leverages the world’s most Universal Data Connection Platform.
            </p>
          </div>
        </div>
        <div className="order-1  lg:order-2 rounded-3xl lg:pt-2 flex items-center self-stretch justify-center flex-1 max-lg:aspect-video ">
          <Image
            className="md:w-full w-52 h-auto max-lg:h-full md:object-contain max-lg:w-auto scale-105 -translate-y-2"
            src={"/media/usbc2.webp"}
            width={1000}
            height={1000}
            alt="usb-type-c"
          />
        </div>

        {/* <div className="relative  lg:pt-2 flex items-end self-stretch justify-center flex-1 max-lg:aspect-video">
        <div
          className="absolute inset-0 z-0 rounded-3xl
     bg-[radial-gradient(ellipse_at_top_right,_theme(colors.orange.50)_0%,_theme(colors.violet.50_/_0.4)_35%,_transparent_75%)]"
        ></div>

        <Image
          className="relative z-10 lg:w-full w-52 h-auto max-lg:h-full md:object-contain max-lg:w-auto scale-105 -translate-y-2"
          src="/media/usbc2.webp"
          width={1000}
          height={1000}
          alt="usb-type-c"
        />
      </div> */}
      </div>
    </section>
  );
};
