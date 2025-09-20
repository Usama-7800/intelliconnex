import Image from "next/image";

export const WifiSpeed = () => {
  return (
    <div className="py-10 md:mt-40 md:pb-20 md:mb-28 lg:mb-40 flex md:flex-row flex-col gap-4 justify-between items-center px-6 2xl:px-0 max-lg:bg-orange-300 max-lg:px-6 2xl:mx-6">
      <Image
        alt="Background"
        src={"/media/wifi-Mask.png"}
        width={1920}
        height={340}
        className="absolute max-lg:hidden left-0 right-0 lg:h-92 h-96 lg:translate-y-0 -translate-y-12 m-auto w-screen -z-10"
      />
      <div className="flex md:flex-row flex-col items-center gap-8">
        <div className="flex-1">
          <h2 className=" text-xl coxl:text-2xl xl:text-4xl xxl:text-[34px] font-semibold mb-8 !leading-snug">
            WiFi Speeds are not what you think they should be.
          </h2>
          <p className="text-base  xxl:text-xl ">
            Super convenient for accessing the internet and connecting home
            devices, wireless data connections often don&apos;t deliver a
            fraction of the bandwidth you may have been led to believe.
          </p>
        </div>
        <Image
          width={275}
          height={275}
          src="/media/wifi-3d.png"
          alt=""
          className="w-[50%] md:w-80 "
        />
        <div className="flex-1">
          <h2 className="text-xl coxl:text-2xl xl:text-4xl xxl:text-[34px] font-semibold mb-8 !leading-snug">
            Waiting for faster WiFi will cost you thousands of dollars.
          </h2>
          <p className="text-base  xxl:text-xl ">
            With faster WiFi routers planned for 2024, waiting to upgrade will
            help to connect more devices but will also require you to upgrade
            all your connected systems to achieve faster speeds.
          </p>
        </div>
      </div>
    </div>
  );
};
