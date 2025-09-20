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
          // sectionTitle: "☁️ Cloud vs. Local File Storage",
          sectionTitle:
            '<div class="flex flex-row !justify-start !items-start gap-x-2"><img class="w-8" src="/media/faqs/cloud.png" alt="USB 2.0" /> <p>Cloud vs. Local File Storage</p> </div>',
          question:
            "What is the best approach for managing creative files—cloud or local?",
          answer:
            '<div ><p class="mb-4">A <span class="text-primary font-semibold">hybrid approach</span> is ideal: use the cloud for real-time collaboration and keep local backups for performance-critical tasks and secure storage. </p></div>',
        },

        {
          question:
            "Is cloud storage a good long-term backup solution for creatives?",
          answer: `    <div><p class="text-primary font-bold md:-mt-1 md:mb-4">Not entirely.</p><p>Many users view cloud storage as better for collaboration and sharing, but not for long-term backups due to speed, reliability, and control concerns.</p>
    </div>`,
        },
        {
          question: "What is the “Rule of Three” in Digital Storage",
          answer: `<div><p class="mb-4">The "Rule of Three" is a popular approach to digital storage followed by most Creative Professionals where every file is stored at least three times:</p>
        <ol class="custom-counter ml-4 md:ml-40 mb-4">
            <li>in one or more active system(s),</li>
            <li>in a Cloud Storage location, and</li>
            <li>in a local network storage appliance or external hard drive.</li>
        </ol>
        <p class="mb-4">In practice, files may be stored more than three times to protect against data loss and ensure accessibility.</p>
        <p>As a result, Creative Professionals are constantly transferring, copying and syncing files between multiple local locations, in addition to any cloud storage they might use.</p>
    </div>`,
        },
        {
          question:
            "Can’t I simply migrate all local files to Adobe Creative Cloud?",
          answer: ` <div><p class="mb-4">
        <p class="text-primary font-bold md:-mt-4 mb-4">Not easily.</p>
        <p>Adobe's sync tools require local versions and don’t allow complete cloud-only setups. Users often still need external storage or NAS systems. As such, local data workflows remain critically important.</p>
    </div>`,
        },
        {
          question:
            "Why do digital creatives prefer local file storage for large projects?",
          answer: `    <div>
        <p>Local sharing offers reduced latency, better storage control, faster access for editing high-res files, and increased reliability compared to cloud services.</p>
    </div>`,
        },
        {
          question: "How can RocketBox™ add to a Cloud strategy? ",
          answer: `    <div>
        <p class="mb-4">Cloud data strategies are an important aspect of collaborating with other creative professionals, customers and accessing key files when outside the office.</p>
        <p class="mb-4">RocketBox™ provides the quickest way to connect all your creative systems locally without the overhead of complex networks.</p>
        <p >Fast, Secure and accessible to all USB-enabled systems, RocketBox™ transforms a cloud-dependant strategy into the higest performing hybrid network solution preferred by serious creatives.</p>
        </div>`,
        },
        {
          // sectionTitle: "🧩 File Transfer & Migration ",
          sectionTitle:
            '<div class="flex flex-row !justify-start !items-start gap-x-2"><img class="w-8" src="/media/faqs/puzzle.png" alt="USB 2.0" /> <p>File Transfer & Migration</p> </div>',
          question:
            "What are the typical file transfer challenges creatives face?",
          answer: `    <div>
        <p >Issues include inconsistent performance, broken file paths, delays in opening files, and disruptions from re-linking during cloud or server transitions.</p>
        </div>`,
        },
        {
          question:
            "Can cloud storage solve my file transfer & migration challenges?",
          answer: `    <div>
      <p class="text-primary font-bold mb-4 ">No</p>
        <p class="mb-1">File migration involves maintaining file structures, references, and backups. Cloud migrations have been reported by many creative professionals to introduce inconsistencies can cause lost or corrupted files, making full migration impractical for many.</p>
        <p >For most creatives, Cloud Storage is a critical component of a hybrid solution connecting customers and collaborators over the Internet while maintaining a robust local file transfer platform for fast, lagless and secure file transfers and workflows. </p>
        </div>`,
        },
        {
          question: "Is USB still relevant for transferring data?",
          answer: ` <div>
        <p class="text-primary font-bold mb-4">Yes</p>
        <p>Despite recent advances in Cloud and Wireless data transfer technologies, USB is often a preferred method of transferring files between systems.</p>
        <ul class="mb-4">
            <li>USB is simple and universal – no setup needed</li>
            <li>Faster to use a USB drive, transferring data twice to and from different systems, than to use wireless or internet transfers</li>
            <li>Ideal for secure, offline file movement, particularly in low internet or high-security environments</li>
            <li>Connects more systems without the need for conversions</li>
        </ul>
        <p>As USB connections get faster, use of USB for data transfers between systems is more and more desirable.</p>
    </div>`,
        },
        {
          question: "What are examples of dedicated USB transfer tools?",
          answer: ` <div>
        <p class="text-primary font-bold  mb-5">Tools like Easy Transfer Cables enable:</p>
        <ul>
            <li>Direct connection between two laptops</li>
            <li>High-speed data migration without external drives</li>
            <li>Secure and fast movement of large files</li>
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
