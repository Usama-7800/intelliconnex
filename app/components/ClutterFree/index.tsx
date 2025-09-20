import Image from "next/image";

export const ClutterFree = () => {
  return (
    <section className="flex md:flex-row flex-col lg:pt-12 items-center justify-center lg:gap-24 md:-mt-10 lg:mb-40 mb-10 md:mb-24 relative mx-6">
      <Image
        alt="clutter-free"
        src={"/media/clutter-free.jpg"}
        height={2548}
        width={1524}
        className="absolute w-full -z-10 rounded-3xl h-full object-right object-cover lg:opacity-100 opacity-20"
      />
      <div className="flex flex-col flex-1 lg:text-xl max-w-lg ml-auto lg:mr-12 lg:mb-40 p-5 md:p-8">
        <h2 className="lg:text-4xl text-2xl font-bold leading-snug lg:mb-6 mb-4">
          Powerful Clutter-Free <br /> Workspaces
        </h2>
        <p className="text-black mb-6">
          Boost productivity and creativity with high-speed data connections
          across all your systems. <br />
          <br />
          Say goodbye to multiple devices, costly Ethernet adapters, and messy
          power cables.
        </p>
        <p>
          IntelliConnex keeps your environment clean and organized, free from
          distractions.
        </p>
      </div>
    </section>
  );
};
