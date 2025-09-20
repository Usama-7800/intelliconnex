import Image from "next/image";
import Faqs from "@/components/Faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faqs - About Us",
  description: "",
  robots: {
    index: false,
    follow: false,
  },
};
export default function Page() {
  const faqItems = [
    {
      name: "Company",
      content: [
        {
          question: "Who is IntelliConnex?",
          answer:
            "<div class='md:!-mt-2'><ul class='!space-y-4'><li><p>IntelliConnex is a technology start-up that is building the future of consumer computing using a new approach to information exchange.</p></li><li><p>Designed by passionate technologists, IntelliConnex implements a whole new way to connect consumer systems in a way that is fast, easier and less energy consuming. </p></li><li><p>Inspired by the vast production of exciting digital content by every-day users who need simpler ways to manage huge volumes of pictures, media and other digital files across a growing number of systems.</p></li><li><p>Backed by USB Experts, Chip Designers, Hardware engineers and Software developers, IntelliConnex creates a tomorrow for Consumers First™</p></li></ul></div>",
        },
        {
          question: "Where are you based?",
          answer:
            "<div class='md:!-mt-2'><ul class='!space-y-4'><li><p>IntelliConnex is based in Toronto and have activities in Portland and Austin</p></li></ul></div>",
        },
        {
          question: "Why did you create the RocketBox™?",
          answer:
            "<div class='md:!-mt-2'><ul class='!space-y-4'><li><p>Rocketbox™ is built for everyone with two or more computer systems. (PC, Laptop, tables or smartphone)</p></li><li><p>Designed to be used by anyone, RocketBox™ eliminates the need to be a network engineer to share digital files across all your systems instantly.</p></li><li><p>The technology behind RocketBox™ was first created to save dozens of hours copying saved games from one game console to another. Absent a removable drive, the vendor of a leading gaming console needed to get the data off old systems and on to a new one in the fasted time possible. Despite creating a working solution, manufacturing costs were too high to support early sales. </p></li><li><p>Looking at our newly created data transfer solution, we looked at our desk, and the desks of many other people. What we saw was a growing number of computing platforms where it became increasingly difficult to move data between. Even with faster internet, better WiFi, AirDrop, Bluetooth and others, the fastest way to move large amounts of data (or very large files) is using a portable USB Hard Drive. Most Digital Creatives still rely on a portable harddrive to move their work between 3, 4, even 5 different systems.</p></li><li><p>Nowhere is the need for a simple yet powerful solution more evident than in exploding sales of 2.5, 5 and 10 Gbps Ethernet network switches.  And, despite declining costs, these network devices remain difficult for most people to use.</p></li></ul></div>",
        },

        {
          question: "Why do you say “Consumers First”?",
          answer:
            "<div class='md:!-mt-2'><ul class='!space-y-4'><li><p>For years, Consumers and Small Businesses have had to make do with converted enterprise technologies; and while the technologies have been made cheaper, they are still extremely complex and inconvenient to use.  </p></li><li><p>More and more consumers are looking for multi-system solutions with a simple, inexpensive and FAST way to move increasing amounts of data between a growing number of systems. The Digital Creative leads this trend.</p></li><li><p>Removal of wired Ethernet ports from most consumer systems has meant an increasing reliance on wireless data networks that are expensive, less secure and poor performers when it comes to moving large amounts of data.</p></li><li><p>By exclaiming <b>“Consumers First”</b> IntelliConnex is making the statement that Consumers should not be forgotten; and that the <b>fastest, most efficient technology can also be the easiest to use.</b></p></li></ul></div>",
        },
        {
          question: "Our History",
          answer:
            "<div class='md:!-mt-2'><ul class='!space-y-4'><li><p>Progressing technologies originally conceived while at develLAB, our founder formed crossPORT Network Solutions to perfect the technology before spinning out IntelliConnex Consumer Technologies to focus on developing a Consumer First™ approach to faster, safer and easier data transfer.</p></li><li><p>Working with top PhDs, Semiconductor designers, and Industry experts we continue have developed the revolutionary RocketBox™ product.</p></li><li><p>Early versions suffered from relatively high cost, basic engineering and poor interconnections.</p></li><li><div><p>Today, with the availability of relatively low-cost programmable chips (FPGA), IntelliConnex is proud to offer a product providing reliable and simple connectivity at an exciting price.</p></div></li></ul><h3 class='my-4'><p class='md:!mb-6 md:!mt-10'><b class='text-primary'>View Timeline</b></p></h3><img src='/media/faqs/history.webp' class='max-w-2xl mx-auto md:!mt-8'  alt='USB 2.0' /></div>",
        },

        {
          question: "Can I join IntelliConnex?",
          answer:
            "<div class='md:!-mt-2'><ul class='!space-y-4'><li><p>We are not currently hiring, but we are always on the lookout for some additional members</p></li><li><p>From time to time, we do have some contract work available and will look to expand once products are selling.</p></li><li><div><p>Opportunities such as Sales, Marketing, Product design and Software development</p></div></li></ul><p class='underline my-4'>Contact us </p></div>",
        },
        {
          question: "Can I invest in your company?",
          answer:
            "<div class='md:!-mt-2'><p class='text-primary'>We can support some early investment.</p> <ul ><li>With more and more consumers using multiple computers, creating larger files and amassing huge stores of data, the time is now to build out simple, secure and scalable local data connectivity.</li><li><div><span>If you are a qualified Angel Investor, we welcome the conversation. </span><span class='underline'>Contact us</span></div></li></ul></div>",
        },
        {
          question: "Will you license your technology?",
          answer:
            "<div class='md:!-mt-2'><b class='text-primary'>Yes</b> <ul class='!space-y-4'><li><p>IntelliConnex is open to collaborating and partnering with hardware manufacturers. Contact us</p></li></ul></div>",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#F8F8F8] ">
        <header className="pt-12 md:pt-20 pb-8 md:pb-10 px-4 grid md:grid-cols-5 gap-10 md:px-5 xl:px-10 2xl:px-12 md:items-center main max-w-[1460px] w-full !mx-auto">
          <div className=" md:col-span-3 max-md:text-center flex flex-col max-md:justify-center md:!my-32">
            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold md:!leading-[75px]">
              Who is <span className="text-primary">IntelliConnex</span>?
            </h1>
            <p className="text-lg lg:text-xl 3xl:text-[26px] text-light-gray mt-4 md:mt-6 max-w-xl font-normal">
              Learn how the new RocketBox™ connects your digital world, simpler
              and faster than ever before.
            </p>
          </div>
          <Image
            src={"/media/faqs/about-us.webp"}
            width={700}
            height={80}
            className="w-3/4 md:w-full max-w-[700px] h-auto max-md:mx-auto md:ml-auto rounded-md md:col-span-2"
            alt="Logo"
          />
        </header>
      </div>

      <Faqs data={faqItems} />
    </>
  );
}
