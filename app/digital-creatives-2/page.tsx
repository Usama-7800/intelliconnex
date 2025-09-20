import Faqs from "@/components/Faqs";
import Image from "next/image";
import React from "react";
import DigitalCreativesBanner from "../components/DigitalCreatives/DigitalCreativesBanner";

const page = () => {
  const faqItems = [
    {
      name: " ",
      content: [
        {
          sectionTitle: "💻 Multi-Device & Multi-System Use",
          question:
            "Why is multi-device & multi-system use an important aspect for Creatives?",
          answer: `  <div>
        <p class="mb-6">It is widely held that most people use only one system or device at a time.</p>
        <p class="mb-6">Creatives, however, own and use a number of systems - laptops for portability, workstation or desktop for large graphical works, tablets for light or precise work, and mobile phones for high resolution video and image capture.</p>
        <p class="mb-6">Creatives also have more, and bigger, digital files than the average person.</p>
        <p class="mb-6">Moving more large files between more systems can result in more time spent transferring data than in actual productivity.</p>
        <p>As a result, Creatives need a robust multi-system solution that maximizes time and effort on useful tasks beyond file transfer.</p>
    </div>`,
        },

        {
          question: "Do Creative Professionals often use multiple systems ?",
          answer: `    <div>
        <p class="mb-6">Creative professionals often use setups that include desktop, laptop, and tablet to balance power, mobility, and convenience. This approach allows:</p>
        <ul>
            <li>High-performance editing on desktops</li>
            <li>Portable, on-the-go access with laptops</li>
            <li>Quick sketching and annotation using tablets</li>
        </ul>
    </div>`,
        },
        {
          question: "How many systems do digital creatives typically use?",
          answer: `<div>
        <p class="mb-6">Most Creatives will have a desktop and a laptop—with additional devices like tablets or backup systems for specialized tasks.</p>
        <p>Intel’s Thunderbolt™ research shows that Creative Individuals average over 2.5 systems; not including tablets and phones.</p>
    </div>`,
        },
        {
          question: "What are the benefits of designing a multi-system setup?",
          answer: `<div><p class="mb-6">A multi-system setup is built to promote flexible, efficient workflows, access to files across platforms, and supports hybrid work environments. Ultimately, a multi-system setup ensures Creatives can maximize productivity by focusing on creative activities rather than being stuck waiting on file transfers.</p></div>`,
        },
        {
          sectionTitle: "🔌 Fast Wired Network Switching",
          question:
            "Can’t Creative Professionals simply use Wireless WiFI connections?",
          answer: ` <div><p class="mb-6">Wireless data networking - for example WiFi - is increasingly popular for accessing the Internet easily from a growing number of systems and devices without being limited by a cable.</p><p class="mb-6">However, Creative professionals have more files, and more larger files than the average user. They also move files more often between a greater number of systems compared to average users. Wireless networks are bad for this type of use.</p><p class="mb-6">Advances in new versions of WiFi have increased the number of systems that can be connected but have not significantly increased transfer speeds or improved delays that cause challenges to a Creative Professionals.</p><p class="mb-2 !text-[18px]">As a result, Creative Professionals often prefer a wired network for moving large volumes of data between local systems.</p></div>`,
        },
        {
          question:
            "How much does a wired creative network setup typically cost?",
          answer: `<div><p>Budget setups range from $500–$1,000, mid-range setups cost $1,000–$2,000.</p></div>`,
        },
        {
          question:
            "What equipment is needed for a high speed 4-device wired setup?",
          answer: `<div><p>A high-speed network switch ($150–$600) and four Ethernet/Thunderbolt adapters ($150–$250 each) make up the core of the system.</p></div>`,
        },
        {
          question:
            "How does fast wired network switching improve creative workflows?",
          answer: `<div><p>It accelerates file transfers, supports real-time collaboration, enhances multi-device management, and enables scalable, agile workflows—tailored specifically for digital creative environments.</p></div>`,
        },
        {
          question:
            "What networking hardware is typically used in creative studios?",
          answer: `<div><p class="mb-6"><b class="text-primary ">Studios and professional freelancers often use:</b></p><ul><li><p>10 GbE or Multi-Gig Switches (2.5–5 GbE)</p></li><li><p>Thunderbolt or USB-C to Ethernet adapters</p></li><li><p>Centralized NAS for shared, high-speed storage</p></li></ul><div><p class="mt-4">Investment range is typically <b>$500–$2,000,</b> depending on scale.</p></div></div>`,
        },
        {
          question: "How can I connect a Laptop to a Wired Network?",
          answer: `<div><p class="mb-6"><b class="text-primary">Yes. With Thunderbolt docks and SFP+ transceivers, laptops can:</b></p><ul><li><p>Join high-speed studio networks</p></li><li><p>Access shared NAS systems</p></li><li><p>Maintain editing performance on par with desktops</p></li></ul></div>`,
        },
        {
          question: "Are fast wired networking solutions cost-effective?",
          answer: `<div><p class="mb-6"><b class="text-primary">Yes. Case studies show:</b></p><ul><li><p>Small studios achieved large speed improvements for under $1,500</p></li><li><p>Freelancers created effective setups for under $1,000</p></li><li><p>These costs are justified by saved time and enhanced productivity</p></li></ul></div>`,
        },
        {
          question:
            "Are wired networks worth it for creative professionals and small design studios?",
          answer: `<div><p class="mb-6"><b class="text-primary">Yes</b></p><p class="mb-6">According to several conversations on Adobe and other Creative communities, wired networks provide a great number of benefits for individual creatives and small design studios alike - well beyond the cost of the networks.</p><p class="mb-6"><b>Faster speeds, reduced waiting </b> on file transfers, and <b>improved collaboration</b> are just some of the benefits.</p></div>`,
        },
        {
          question:
            "How do creative individuals benefit from wired network setups?",
          answer: `<div><p class="mb-6">Often called emerging creatives, creative individuals who spend increasing time and energy on developing creative works using technology can also benefit from wired solutions that emphasise portability, speed and affordability. Common aspects include”</p><ul class="md:ml-32"><li><p>High-performance laptops + external SSDs</p></li><li><p>Thunderbolt/USB-C docks for multi-gig connections</p></li><li><p>Cloud backup systems for remote work</p></li></ul></div>`,
        },
        {
          question: "What advantages does RocketBox offer for Creatives?",
          answer: `<div><p class="mt-">RocketBox provides local, high-speed network solutions with <b>lower cost, less cabling, faster setup, portability,</b> and <b>reduced energy</b> usage—making it easier to manage large files and complex workflows.</p></div>`,
        },

        // End
      ],
    },
  ];

  return (
    <main className="w-full">
      <DigitalCreativesBanner />

      <Faqs data={faqItems} />
    </main>
  );
};

export default page;
