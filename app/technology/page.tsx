import Image from "next/image";
import Faqs from "@/components/Faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faqs - Technology",
  description: "",
  robots: {
    index: false,
    follow: false,
  },
};
export default function Page() {
  const faqItems = [
    {
      name: "Our Tech",
      content: [
        {
          question:
            "What makes the technology behind Rocketbox™ so revolutionary?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">RocketBox™ outperforms  all other data exchange platforms by eliminating  everything that might slow data down. </b></p><p class="my-4">When we talk about data speed, we are usually talking about <b>Bandwidth</b>.  Bandwidth measures much data can be moved at once; usually shown as an amount of data in a set time e.g. 5 gigabits per second (5 Gbps)</p><p  class="my-4">Data speed must also consider <b>Latency</b> - or <b>Data Delay</b>. Data latency, or delay, are when data arrives slower than expected; imagine moving your mouse and the pointer taking seconds to move, or clicking on a webpage on the Internet and it taking time to respond. The delays are not how much data can move at the same time, but the amount of time it takes to begin moving, or the number of times it stalls in process. </p><p  class="text-center font-medium text-black my-2 md:my-4">RocketBox™ reduces data transfer delay by 20,000X between Consumer Systems</p><ul class="!space-y-4"><li><p>Network equipment used to connect multiple systems over Ethernet - known as network switches – introduce delays as data is retrieved, sorted and then sent to its ultimate destination.</p></li><li><p>For small consumer networks with 4 to 8 systems, delays are typically 20 milliseconds (or 20 thousand microseconds).</p></li><li><p>20 milliseconds is almost meaningless to human users, but this delay causes applications to crash if files are being edited over a network connection, and requires users to copy files from a system on the network and onto the local system.</p></li><li><p>Rocketbox™ reduces data transfer delays by more than 20,000X compared to traditional consumer Ethernet switches, fast enough, in fact to support remote file editing.</p></li><li><p>In fact, RocketBox™ delivers file transfer with lower latency than even the most advanced AI data center switches.</p></li></ul><p class="!my-10">See why RocketBox™ is <u>faster than Ethernet</u>.</p><img class=" mx-auto" src="/media/faqs/data-delay.webp" alt="Data Delay" />',
        },

        {
          question: "Has RocketBox™ technology been independently verified?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes</b></p><ul class="!space-y-4"><li><p>In 2017, the simple transfer platform that provides direct system to system transfers was reviewed by MCCI – a leading USB design house and industry certification authority.</p></li><li><p>Our technology was found to be compliant to all aspects of USB protocols and demonstrated strong viability. A design flaw was noted that limited the usefulness of the design for large transfers. Today we are happy to have found and implemented a solution.</p></li></ul>',
        },

        {
          question: "Is RocketBox™ technology Patented?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes</b></p><ul class="!space-y-4"><li><p>There are 3 patents granted protecting our technology</p></li><li><p>There are many more to be filed.</p></li></ul> ',
        },

        {
          question:
            "Has RocketBox™ solution been recognized with industry Awards?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">An early version of RocketBox™ technology and product was awareded with Honors by the Electronics Show in 2015 </b></p><div class="grid grid-cols-1 md:grid-cols-[1fr_38%] mt-4"><div ><ul class="!space-y-4"><li><p>Introduced at CES 2015, the product concept and technology now known as RocketBox™ was awarded an honorable at CES Consumer Innovation Awards for Peripherals.</p></li><li><p>Since then, we have been expanding and perfecting fast, simple and private consumer networking platformbased on USB.</p></li><li><p>Early versions suffered from relatively high cost, basic engineering and poor interconnections.</p></li><li><p>Today, with the availability of relatively low-cost programmable chips (FPGA), IntelliConnex is proud to offer a product providing reliable and simple connectivity at an exciting price.</p></li></ul></div><div><img src="/media/faqs/technology.webp" class="max-w-2xl mx-auto md:!mt-8" alt="USB" /></div></div>',
        },

        {
          question:
            "Has the technology behind RocketBox™ publicly demonstrated?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes</b></p><div><ul class="!space-y-4"><li><p>RocketBox™ technologies have been demonstrated in a number of public and private settings. As with any new and developing technology, some of the demonstrations have been simple; but others have been quite significant.</p><ul class="md:!mt-8 !space-y-4 md:!ml-10"><li>2015 – Consumer Electronics Show</li><li>2017 – Direct transfer cable demonstrated at CES in association with Luxshare ICT</li><li>2024- Integrated 10 Gbps demonstrations at CES.</li></ul></li></ul></div>',
        },
        {
          question: "Does anyone have a similar technology?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">No</b></p><ul class="!space-y-4"><li>RocketBox™ technologies are completely unique across the industry. IntelliConnex implements a completely new way to move data between systems that has not been implemented by anyone, or any company.</li><li>While every other consumer solution implements hand-me-down technologies from 20-year-old enterprise solutions, only IntelliConnex delivers true innovation for Consumers First™</li><li>Powerfully simple, our novel approach is proven to be extremely effective.</li></ul>',
        },
        {
          question: "Does RocketBox™ compete with Thunderbolt™",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">No - RocketBox™ supports both USB and Thunderbolt™ connections</b></p><ul class="!space-y-4"><li>Like USB, Thunderbolt™ is a connection technology, connecting systems and devices over a shared cable.</li><li>RocketBox™ builds on the capability of USB and Thunderbolt™ to create an intelligent data exchange platform that acts something like an Ethernet Network.</li><li>RocketBox™ supports transfers between any USB or Thunderbolt™ -enabled system up tp 20 Gbps.</li><li>A comparison of available speeds is here</li></ul><img src="/media/faqs/platform-compete.png" class="max-w-5xl mx-auto mt-20" alt="USB 2.0" />',
        },

        {
          question: " What is the Potential Speed supported by RocketBox™?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">120 Gbps with USB4 Rev2</b></p><ul class="!space-y-4"><li>Presently, available USB technologies support transfers up to 20 Gbps.</li><li>RocketBox™ can support transfers upt to 120 Gbps between systems at such time as the underlying technologies become available and affordable. .</li></ul>',
        },
        {
          question: "What is the distance limitation for technology use?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">100 Meters</b></p><ul class="!space-y-4"><li><p>With the availability and affordability of fiber optic USB cables, IntelliConnex solutions support very long distances. Some fiber optic cables may even support power delivery.</p></li><li><p>Standard USB copper cables are limited to certified lengths and provide inexpensive connections suitable for most local workspaces.</p></li></ul>  ',
        },
        {
          question: "Does the technology support network tiers for wider use?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Not Required</b></p><ul class="!space-y-4"><li><p>Built for Consumers First™, the current technology is focused on building Fast, simple and secure workspaces for consumers.</p></li><li><p>There are working designs that support tiered implementations; however, traditional network tiers introduce unnecessary complexity, slowdown and cost. In short, network tiers are not an ideal implementation.</p></li><li><p>Our technology scales and secures connections much better than traditional networks. We can solve for distance and connection counts without requiring multiple tiers of switching interference and slowdowns common in traditional networks.</p></li></ul>',
        },
        {
          question: "Does the RocketBox™ support Video switching?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">No</b></p><ul class="!space-y-4"><li><p>While theoretically feasible, we are a long way from switching video feeds.</p></li><li><p>Designed as a data exchange platform between systems, video is not an immediate or easy implementation. At some point, iRocketBox™ may evolve to support / manage multiple video feeds into one or more connected video outputs. At present, no such capability exists or planned for the near term.</p></li></ul> ',
        },
        {
          question:
            "Why has the technology taken so long to make it to Market?",
          answer:
            '<ul class="!space-y-4"><li><p>Technically feasible since 2015, the technology behind RocketBox™ has taken so long because it is so different.</p></li><li><p>Initial limitations facing the technology included high-bandwidth transfers between USB controllers and required more sophisticated data buffers to address inconsistent read and writes by connected system.</p></li><li><p> Custom chipset designs that leverage standard technologies failed to find investment support largely due to a misunderstanding of our low risk designs and small perceived market. </p></li><li><p>Recent developments in programmable FPGAs have finally unlocked the capability to deliver a cost-effective high-speed data switch that is both capable and easy to use.</p></li></ul>',
        },
        {
          question:
            "Are there Industry published papers behind the technology?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes</b></p><ul class="!space-y-4"><li><p>Constructing secure peer data connectivity for mobile systems. IEEE Xplore - 2018 IEEE International Conference on Consumer Electronics (ICCE) · Jan 1, 2018</p></li><li><p>Constructing universal secure and private data networks across consumer systems. IEEE Xplore - 2018 IEEE International Conference on Consumer Electronics (ICCE) · Jan 1, 2018</p></li><li><p>Constructing universal secure multi-medium data networks across consumer systems. IEEE Xplore - 2018 IEEE International Conference on Consumer Electronics (ICCE) · Jan 1, 2018</p></li><li><p>Re-envisioning digital architectures connecting CE hardware for security, reliability and low energy. IEEE Xplore - 2018 IEEE International Conference on Consumer Electronics (ICCE) · Jan 1, 2018</p></li><li><p>Intelligent Data Exchange [iDX] for 5Gbps Consumer Data Switch shows Energy Savings over 95%. IEEE Xplore - 2024 IEEE International Conference on Consumer Electronics (ICCE) · Jul 22, 2024</p></li><li><p>Design and Verification of Ultra-Low Latency Intelligent Consumer Data Exchange Platform. IEEE Xplore - 2024 IEEE International Conference on Consumer Electronics (ICCE) · Jul 22, 2024</p></li></ul> ',
        },
        // End
      ],
    },
    {
      name: "Performance",
      content: [
        {
          question:
            "Are transfers using RocketBox™  faster than normal USB cables?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">No.</b></p><ul class="!space-y-4"><li>RocketBox™ leverages the existing performance capabilities of USB cables to create direct data transfer links between systems that are not normally supported by USB.</li><li>The difference is that RocketBox™ supports direct data transfers between systems, rather than a system and a device.</li><li><p>Not only does RocketBox™ achieve what the industry thought to be impossible, but it does so with less delay than the worlds fastest AI data switch from NVIDIA.</p></li></ul>',
        },
        {
          question: "Are transfers using RocketBox™  faster than Wi-Fi 7?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes</b></p><ul class="!space-y-4"><li>Wireless data transfer is extremely convenient and easy to use, but it is slow, much slower than USB wired connections.</li><li>Wireless speeds are also subject to physical and electrical interference and distance, making it very inefficient for large data transfers.</li><li>New WiFi versions offer improvements for distance and the number of connected devices, but not speed.</li><li><div><p>Latest WIFI 7 routers advertise the potential for 46 Gbps, however a single connection can only reach as high as 1.5 Gbps as most systems do not support the full range of frequencies required for the highest speeds.</p></div></li></ul>   <div class="grid grid-cols-[80%_20%] md:grid-cols-[90%_10%] mt-10 mb-6 gap-0 w-full md:max-w-3xl mx-auto items-end"><div class="w-full "><p class="w-full !leading-6 text-black !text-[15px] text-center italic">… it is important to know that not all client devices support 160MHz wide channels.Most notably, there aren’t currently any Apple devices supporting 160MHz wide channels</p></div><img src="/media/faqs/technology/eero.png" class="!w-20 md:w-sm "  alt="USB 2.0" /></div><img src="/media/faqs/technology/wifi7.webp" class="max-w-3xl mx-auto !rounded-none"  alt="USB 2.0" />',
        },

        {
          question: "Can the RocketBox™ make Internet Connections faster?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">No - but it will make file transfers safer </b></p> <ul class="!space-y-4"><li class="!mt-5"><p>The RocketBox™ is a super-fast, easy-to-use local data exchange platform that is not connected to the Internet.</p> </li><li><p>The RocketBox™ makes it possible to share data privately between systems in a local work area – like across your desk - without the delays and security risks introduced by the Internet. There is no need to transfer data over the internet. </p></li><li><p class="md:!mb-6">Of course, you can continue to access the Internet over WiFi while transferring large files effortlessly in private using the RocketBox™ platform. This is ideal for most.</p></li><li><div><p>Future product plans include a shared Internet access with secure local transfers. For now, IntelliConnex offers the only solution to move data across your desk (or table or wherever) without exposure to delays and insecurities of the Internet.</p>  </div></li></ul><h3 class="!font-bold text-center !text-lg md:text-lg  !text-[#9A9A9A] my-6 md:!mt-16 md:!-mb-4 ">Simple, Fast & Secure Local File Transfer </h3> <img class="max-w-4xl mx-auto" src="/media/faqs/technology/internet-faster.webp" alt="USB" />  ',
        },

        {
          question:
            "Does RocketBox™ offer faster data transfer than Thunderbolt™?",
          answer:
            '<div><p class="md:!mb-6"><b class="text-primary">RocketBox™  expands the fastest speeds to more systems</b></p><p class="py-4">RocketBox™ is a purpose-built device that connects multiple Host systems at the fastest speeds using USB and/or Thunderbolt™. As such, it can only go as fast as the linking technologies.</p> <p class="py-4">While USB is designed only to connect Hosts and Devices, Thunderbolt™ is a specialized communications platform that can connect Host systems to both Devices and other Host Systems. Direct Host-to-Host connections are made possible using its Peer2Peer file transfer functionality (IP Tunnelling). The direct transfer is mostly limited to file transfers between only two computers.</p><p class="py-4">And, whereas Thunderbolt™ is a shared bus, RocketBox™ builds dedicated connections between multiple systems that perform better.</p></div><p class="md:!mt-4 md:!mb-6 "><b class="text-primary">Direct Transfer Speed Comparisons depend on versions of Thunderbolt™ and USB </b></p><ul class="!space-y-4"><li>RocketBox™ 5Gbps transfer platform using 5Gbps USB connections is faster than TB1 and TB2</li><li>RocketBox™ 10Gbps transfer platform using 10Gbps USB connections is faster than TB1 and TB2, and as fast as TB3.</li><li>RocketBox™ 20Gbps transfer platform using 20Gbps USB connections is faster than TB1,  TB2, TB3 and as fast as TB4.</li><li><p>Thunderbolt™ 5 currently offers the fastest file transfers between 2 systems via Intel’s <span class="font-semibold">Thunderbolt Share™</span> available only for Windows. Using the "Bandwidth Boost" function available in Thunderbolt™ 5, speeds can reach 120 Gbps.</p></li><li>Ultimately, RocketBox™ connects more systems with faster throughput. </li></ul> <br /><div class="flex justify-center md:my-8"><a  class=" !shadow-none !px-0 !py-0  md:!-mt-6 !rounded-none !bg-transparent !text-light-gray !text-lg !border-none !outline-none !no-underline !font-normal" href="#" target="_blank">View Chart</a></div><h3 class="!font-bold text-center !text-lg md:text-lg  !text-[#9A9A9A] my-2 md:!mt-4 ">Thunderbolt™ & RocketBox™ Transfer Speeds</h3><div class="max-w-4xl mx-auto overflow-x-auto"><table class=" w-full text-sm text-center border-collapse table-auto"><div class="mx-auto "><img class="mx-auto max-w-4xl !rounded-none" src="/media/faqs/thunder-switch.webp" alt="USB 2.0" /><p class="!mt-3 !text-xs !font-normal text-light-gray">More information from Intel on <a target="_blank" class=" !shadow-none !px-0 !py-0  !rounded-none !bg-transparent !text-light-gray  !font-normal !text-xs "  href="https://www.thunderbolttechnology.net/sites/default/files/Thunderbolt%E2%84%A2%20Networking%20Bridging%20and%20Routing%20Instructional%20White%20Paper.pdf">Thunderbolt Networking Bridging and Routing</a></p></div></table></div>',
        },

        {
          question: "Are RocketBox™ connections faster than Ethernet?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary mt-6">Yes, even with identical speed ratings, RocketBox™ is faster</b></p><p class="text-black mt-6 mb-3"><b >There are 4 Reasons why RocketBox™ is Faster</b></p><ol><div class=" ml-4 md:!ml-32 font-semibold md:mb-12 !space-y-3" ><li>Separated To / From data streams</li><li>Separated Data Facilities</li><li>Single Protocol Overhead</li><li>Straight-through Transfers</li></div></ol> <div><h3 class="mt-6 !font-bold !text-lg mb-3">1. Separated To / From Data streams</h3><ul class="!space-y-4"><li><div><p class="mb-6">RocketBox™ uses USB * Thunderbolt™ communications which have isolated transfers for data going in different directions. In contrast, Ethernet uses a single shared data highway where data must be split to handle traffic in two directions.</p></div></li></ul></div> <img class="mx-auto max-w-5xl !rounded-none" src="/media/faqs/share-data.webp" alt="USB 2.0" />  <div><h3 class="mt-6 !font-bold !text-lg mb-3">2. Separated Transfer Facilities</h3><ul class="!space-y-4"><li><div><p class="mb-6">Built with a single highway for all data traffic between every connected point, Ethernet Network equipment must be extremely intelligent and powerful to manage multiple communication in multiple directions. We will see below just how much time is lost. RocketBox™ maintains separate facilities for each transfer.</p><img class="mx-auto max-w-5xl !rounded-none !mb-12" src="/media/faqs/transfer.webp" alt="USB 2.0" /></div></li></ul></div> <div><h3 class="mt-6 !font-bold !text-lg mb-3">3. Multiple Protocol Overheads</h3><ul class="!space-y-4"><li><div><p>Consumer Ethernet networks suffer from multiple protocol overheads where RocketBox™ does not. Additional overheads are a result of most consumer products not having an Ethernet Port and require a USB Adapter to connect to an Ethernet Network. <p class="!mb-4 !text-[15px] italic !leading-6 ml-8">For most consumer systems without an Ethernet port, a first overhead is a USB control information necessary to use a USB/Ethernet conversion dongle. A second overhead is the Ethernet protocol itself. In the highway example, Ethernet requires data to be first loaded into a USB car before stopping and switching to an Ethernet car, and then again back into a USB car. Stopping and changing cars takes time, energy and space. It can even result in lost luggage.</p></p><h3 class="!font-extrabold text-center !text-lg md:text-lg  !text-[#9A9A9A] my-2 md:!mt-12 md:!mb-8 ">Dual Protocol Overheads in Consumer Ethernet Networks</h3><img class="mx-auto max-w-xl !rounded-none" src="/media/faqs/dual.webp" alt="USB 2.0" /><h3 class="!font-extrabold text-center !text-lg md:text-lg  !text-[#9A9A9A] my-2 md:!mt-12 md:!mb-8">Single Protocol Overheads in RocketBox™ Networks</h3><img class="mx-auto max-w-xl !rounded-none" src="/media/faqs/single.webp" alt="USB 2.0" /></div></li></ul></div>  <div class="!mt-16"><h3 class=" !font-bold !text-lg   md:!mb-6">4.Straight-Through Transfers</h3><ul class="!space-y-4"><li><div><p>RocketBox™ transfers take 20,000X less time to go from sending system to receiving system. compared to Ethernet.<p class="!mb-4 !text-[15px] italic !leading-6 ml-8">When there is only one lane of traffic in the transfer facilities (switching chip) the highway scenario can be pictured as a roundabout, or traffic circle. Traffic circles are very efficient but can add significant delays. In fact, delays can exceed 20,000 milliseconds whlle data arrives and finds its destination. Another 2,000 milliseconds is consumed by USB/Ethernet Adapters. Only about 1% of the time is actually used moving data along the Ethernet wires.</p></p><h3 class="!font-extrabold text-center !text-lg md:text-lg  !text-[#9A9A9A] my-2 md:!my-8 md:!mb-10 ">Consumer Ethernet Transfers over Network Switch</h3><img class="mx-auto max-w-2xl !rounded-none md:!mb-12" src="/media/faqs/network-switch.webp" alt="USB 2.0" /></div></li><li class="!mt-6"><div class=""><p >In comparison, data transfers are switched via dedicated connections and go directly over our platform without a single trip around a roundabout.</p><h3 class="!font-extrabold text-center !text-lg md:text-lg  !text-[#9A9A9A] my-2 md:!my-8  md:!mb-10">Straight-through Transfers over RocketBox™</h3><img class="mx-auto max-w-2xl !rounded-none" src="/media/faqs/over-rocketbox.webp" alt="USB 2.0" /></div></li></ul></div>',
        },
        {
          question:
            "Does RocketBox™ cause a delay / slow down data like Ethernet & Wifi?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">No - RocketBox™ is revolutionary in how little latency it introduces</b></p><p class="my-4">Latency - or data delays - is an important aspect of file transfer and shared file access.</p><ul class="!space-y-4"><li>Network latency is the delay or lag experienced when data travels across a network. For a home network, a good latency is generally considered to be under 50 milliseconds (ms), with 20-40 ms being optimal for gaming and other real-time applications. Anything above 100 ms may lead to noticeable delays or lag</li><li><div><p>A crucial aspect of Digital Editing, file access latency often requires the use of Portable USB Harddrives for large file editing and access.</p><h3 class="!font-extrabold text-center !text-lg md:text-lg  !text-[#9A9A9A] my-2 md:!my-8 ">Network Latency (Lags) in Consumer Networks</h3><img class="mx-auto max-w-2xl !rounded-none" src="/media/faqs/network-latency.webp" alt="USB 2.0" /></div></li></ul>',
        },

        // End
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#F8F8F8]">
        <header className="pt-12 md:pt-20 pb-8 md:pb-10 px-4 grid md:grid-cols-5 gap-10 md:px-5 xl:px-10 2xl:px-12 md:items-center main max-w-[1460px] w-full !mx-auto">
          {/* Text section – shown first below 768 px, second at ≥768 px */}
          <div className=" md:col-span-3 max-md:text-center flex flex-col max-md:justify-center md:!my-32">
            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold md:!leading-[75px]">
              How can <span className="text-primary">Technology</span> be that
              Fast?
            </h1>
            <p className="text-lg lg:text-xl 3xl:text-[26px] text-light-gray mt-4 md:mt-6 max-w-xl font-normal">
              Learn how the new RocketBox™ connects your digital world, simpler
              and faster than ever before.
            </p>
          </div>

          {/* Image section – shown first at ≥768 px, second below */}
          <Image
            src={"/media/faqs/technology/tech.webp"}
            width={320}
            height={80}
            className=" w-3/4 md:w-full max-w-[550px] h-auto max-md:mx-auto md:ml-auto rounded-md md:col-span-2"
            alt="Logo"
          />
        </header>
      </div>
      <Faqs data={faqItems} />
    </>
  );
}
