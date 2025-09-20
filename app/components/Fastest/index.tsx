import Image from "next/image";

export const Fastest = () => {
  return (
    <section className="flex lg:flex-row flex-col items-start lg:gap-24 gap-6 lg:mb-40 mb-24 ">
      <div className="bg-gradient-to-r from-violet-50 to-orange-50 rounded-3xl self-stretch flex-1 flex items-center justify-center lg:py-2 py-12">
        <Image
          className="lg:w-auto w-52 h-auto"
          src={"/media/100xfaster.png"}
          width={367}
          height={387}
          alt="hundred-times-faster"
        />
      </div>
      <div className="flex flex-col flex-1 gap-6 lg:text-xl">
        <h2 className="lg:text-4xl text-2xl font-bold leading-snug lg:mb-6 relative">
          World&apos;s fastest data exchange technology - for{" "}
          <span className="text-orange-500">Consumers FIRST</span>
          <Image
            src="/triangle.svg"
            width="236"
            height="236"
            alt=""
            className="absolute max-lg:hidden top-0 bottom-0 my-auto -right-24 -z-10"
          />
        </h2>
        <p>Say goodbye to sluggish connections and bottlenecks.</p>
        <p>
          <b>IntelliConnex</b> makes file transfers and system connectivity
          effortless. By eliminating the complexities slowing your productivity
          and creativity, we put your technology investments back to working for
          you.
        </p>
        <p>
          Our platforms move data between connections <b>100x faster</b> than a
          traditional consumer Ethernet network switch, and <b>3X faster</b>{" "}
          than the world&apos;s fastest Data Center switches.
        </p>
      </div>
    </section>
  );
};
