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
          sectionTitle:
            '<div class="flex flex-row !justify-start !items-start gap-x-2"><img class="" src="/media/faqs/e-icon.png" alt="USB 2.0" /> <p>Enabling Creative Workflows</p> </div>',
          question: "What is a Creative Workflow?",
          answer:
            '<div ><p class="mb-3">A creative workflow transforms how ideas move from concept to completion. </p><p></p><p>Every stage of the creative process can leverage digital tools to enhance efficiency, improve collaboration, and open new avenues for expression, including design and editing software, version control and review, and finally publishing. </p></div>',
        },
        {
          question: "Do upgraded networks benefit creative workflows?",
          answer: `    <div>
        <p class="text-primary font-bold">Yes, network improvements can dramatically improve creative workflows:</p>
        <ul>
        <li>Faster file transfers (from 30 mins down to 5-10 mins for larger files)</li>
        <li>Simultaneous file access for multiple team members</li>
        <li>Improved collaboration across editing and design systems</li>
        <li>Minimal downtime and higher workflow continuity</li>
        </ul>
        </div>`,
        },

        {
          question: "Can I rely solely on the cloud for creative workflows?",
          answer: `    <div>
        <p class="text-primary font-bold md:-mt-1 md:mb-5">No</p>
        <p>Creative professionals report several challenges and risks as a result of relying on cloud data stores for creative workflows:</p>
        <ul class="md:ml-20">
            <li>Data loss</li>
            <li>File Corruption during syncing</li>
            <li>Performance delays</li>
            <li>Disk space limitations, particularly for backups</li>
        </ul>
    </div>`,
        },
        {
          question: "How does cloud syncing affect digital workflows?",
          answer:
            "<div ><p>Cloud syncing can be slow and unreliable for large files, causing delays and interruptions—especially when working with 4K/8K video or raw media.</p></div>",
        },
        {
          question:
            "What are the main challenges in hybrid (Cloud + Local) creative workflows?",
          answer: ` <div>
        <p class="text-primary font-bold  md:mb-5">Common challenges include:</p>
        <ul>
            <li>File path inconsistencies between devices</li>
            <li>Sync delays between cloud storage and local systems</li>
            <li>Asset linking errors due to varied storage locations</li>
        </ul>
        <p class="text-primary font-bold  md:my-5">Solutions often involve:</p>
        <ul>
            <li>Standardized folder structures</li>
            <li>Automated backup systems</li>
            <li>Version control for assets</li>
        </ul>
    </div>`,
        },
        {
          question: "How do RocketBox™ solutions enhance creative workflows?",
          answer: `    <div>
        <p class="text-primary font-bold">RocketBox™ data transfer platforms:</p>
        <ul>
            <li>Simplify multi-device connectivity (up to 4 systems)</li>
            <li>Enhance portability and reduce hardware requirements</li>
            <li>Provide plug-and-play compatibility</li>
            <li>Double file transfer speeds in many cases</li>
        </ul>
    </div>`,
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
