import Image from "next/image";

export const Connectivity = () => {
  return (
    <section className="lg:flex-row lg:gap-24 lg:mb-40 lg:pb-0 lg:border-b-0 flex flex-col-reverse items-start gap-6 mb-24">
      <div className="lg:text-xl flex flex-col flex-1 gap-6">
        <h2 className="lg:text-4xl lg:mb-6 text-2xl font-bold leading-snug">
          Plug and Play 5 Gigabit <br /> Connectivity for your most demanding
          content workflows
        </h2>
        <p>
          Whether you use technology for work or pleasure, our mission is
          simple: deliver seamless and reliable connectivity between all your
          systems.
        </p>
        <p>
          Universal compatibility means all your systems can be connected at the
          fastest speeds without the need for expensive dongles and adapters.
        </p>
        <p>
          Integrated power keeps your workspace neat and tidy while USB-C
          technologies deliver the magic of multimedia connectivity. Dedicated
          data interconnection stacking ensure that every connection is provided
          uninterrupted data flow.
        </p>
        <p className="text-orange-500">
          Let us show you how you can immediately create an integrated workspace
          across all your systems at 5 Gigabits per second.
        </p>
      </div>
      <div className="bg-zinc-100 rounded-3xl flex items-center self-stretch justify-center flex-1 aspect-[2/1]">
        <Image
          src={"/media/plug-and-play.png"}
          width={725}
          height={590}
          alt="plug-and-play"
          className="absolute lg:w-[37%] w-80 h-auto lg:mb-0 -mb-4"
        />
      </div>
    </section>
  );
};
