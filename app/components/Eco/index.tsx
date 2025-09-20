export const Eco = () => {
  return (
    <>
      <section className="rounded-3xl lg:px-[88px] lg:py-[110px] lg:mb-40 mb-24 relative px-4 py-8 overflow-hidden text-white">
        <div className="absolute -z-10 bg-zinc-900 bg-[url(/media/eco.png)] bg-cover top-0 right-0 w-full h-full bg-right" />

        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col lg:text-lg gap-6 lg:mr-6 lg:tracking-wider lg:-mt-2 max-w-[38rem]">
            <h2 className="lg:text-[38px] lg:mb-10 text-2xl font-bold leading-normal bg-center bg-cover ">
              Green Technology that makes{" "}
              <span className="lg:text-white text-lime-300">
                a <span className="text-lime-300">real</span> difference.
              </span>
            </h2>
            <p>
              Information and Communications Technology (ICT) is a leading
              driver of energy consumption causing CO2 and global warming.
            </p>
            <p>
              Our break through technology saves 95% of consumer switching
              energy and reduces e-waste through upgraded functionality and
              greater value.
            </p>
          </div>
          <div className="bg-white/20 lg:hidden w-full h-px my-8" />
          <div className="flex flex-col gap-2 ml-auto shrink-0 lg:max-w-xs">
            <span className="text-lime-300 text-3xl font-bold">Save</span>
            <span className="text-[58px] font-bold leading-none">$20 - 40</span>
            <span className="text-[18px]">
              while reducing CO2 that causes Global Warming
            </span>
            <div className="h-px bg-white w-full" />
            <span className="text-[18px]">Our switching platforms consume</span>
            <span className="text-[58px] font-bold leading-none">95%</span>
            <span className="text-lime-300 text-3xl font-bold">Less Power</span>
            <span className="text-[18px]">
              than standard consumer <br /> ethernet switches.
            </span>
          </div>
        </div>
        <div className="bg-white/20 lg:hidden w-full h-px my-8" />

        <div className="flex max-lg:flex-col gap-6 mt-8 lg:items-center lg:-mb-12">
          <div className="flex flex-col lg:items-center">
            <span className="text-lime-300 text-3xl font-bold">900 TWh</span>
            <span className="text-3xl font-bold">Opportunity</span>
          </div>
          <p className="text-[18px]">
            <b>
              Small changes{" "}
              <span className="text-lime-300 underline">add up.</span>
            </b>{" "}
            Replacing existing data networks with our technology by 2030 can cut
            global ICT energy needs by the entire US Energy production annually.{" "}
          </p>
        </div>
      </section>
    </>
  );
};
