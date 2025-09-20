import Image from "next/image";
import React from "react";

/**
 * Three‑column RocketBox use‑case grid (Next.js + Tailwind + TypeScript)
 */

interface UseCase {
  id: number;
  title: string;
  overview: string;
  systems: string[];
  objectives: string[];
  equipment: string[];
  rocketboxSpeed: string;
  rocketboxFeatures: string[];
}

const useCases: UseCase[] = [
  {
    id: 1,
    title: "Use Case 1: Part‑Time Creative",
    overview:
      "An enterprising digital creative creates beautiful graphics, videos and illustrations in their part‑time.",
    systems: ["Editing Workstation", "Laptop", "Tablet & High‑end SmartPhone"],
    objectives: [
      "Cut transfer times from 30+ minutes to 5–10 minutes",
      "Low budget",
    ],
    equipment: [
      "Docking Station for Laptop",
      "5 Gigabit Ethernet switch",
      "USB Adapter",
    ],
    rocketboxSpeed: "5 Gbps RocketBox™",
    rocketboxFeatures: [
      "Still faster with less overhead and multiple transfers",
      "Dock not Required",
      "Connections for phone and tablets",
      "Portable for use anywhere",
      "Zero network configuration",
    ],
  },
  {
    id: 2,
    title: "Use Case 2: Freelance Digital Creative",
    overview:
      "A freelance digital artist needed fast, portable file transfers in a hybrid setup—without high costs.",
    systems: [
      "One or two laptops",
      "Mini‑desktop for rendering and storage",
      "Tablet & High‑end SmartPhone",
    ],
    objectives: [
      "Smooth, low‑cost file sharing",
      "Speeds matched workflow needs without overkill",
    ],
    equipment: [
      "5 Gigabit Ethernet switch",
      "2× USB‑C to multi‑gig adapter",
      "Ethernet Cables",
      "MultiGig Ethernet adapter",
    ],
    rocketboxSpeed: "10 Gbps RocketBox™",
    rocketboxFeatures: [
      "+2× faster, less overheads and multiple transfers",
      "No Dongles Required",
      "Integrated Power for Laptop",
      "Connections for phone and tablets",
      "Zero network configuration",
    ],
  },
  {
    id: 3,
    title: "Use Case 3: Small Design Team",
    overview:
      "A small design team requires efficient sharing of high‑res print and digital files across four systems to ensure smooth access and consistent branding.",
    systems: ["Multiple desktop workstations", "Multiple laptops"],
    objectives: [
      "Faster collaboration and real‑time access to shared assets",
      "Reduced workflow delays",
    ],
    equipment: [
      "5 / 10 Gigabit Ethernet switch",
      "Multiple USB/Thunderbolt adapters",
      "Cat6 Ethernet Cables",
      "MultiGig/10GbE Network adaptor",
    ],
    rocketboxSpeed: "10 Gbps RocketBox™",
    rocketboxFeatures: [
      "+2× faster, and multiple dedicated transfers",
      "No Dongles Required",
      "Integrated Power for Laptop",
      "Zero network configuration",
    ],
  },
];

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h3 className="font-bold text-gray-800 mb-1 text-sm">{children}</h3>;

/** Default bullets (used in systems, objectives, equipment) */
const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-disc list-inside space-y-1 text-sm text-light-gray">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

/** Tick icon bullets (only for RocketBox features) */
const TickList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-1 text-sm text-light-gray">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2">
        <Image
          src="/media/icons/tick.svg"
          width={15}
          height={5}
          alt="Picture of the author"
          className="h-4 w-4 shrink-0 text-primary mt-0.5"
        />

        {/* <svg
          
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.54-10.28a.75.75 0 10-1.08-1.04L9 10.94 7.54 9.47a.75.75 0 00-1.08 1.04l2 2a.75.75 0 001.08 0l4-4z"
            clipRule="evenodd"
          />
        </svg> */}
        <span className="text-neutral-700">{item}</span>
      </li>
    ))}
  </ul>
);

const RocketBoxCard: React.FC<{ speed: string; features: string[] }> = ({
  speed,
  features,
}) => (
  <div className="bg-[#FE7500]/20 rounded-lg p-4 mt-auto">
    <h4 className="font-bold text-black mb-2 text-base xxl:text-[25px]">
      {speed}
    </h4>
    <TickList items={features} />
  </div>
);

const UseCaseCard: React.FC<{ data: UseCase }> = ({ data }) => (
  <article className="flex flex-col rounded-lg border border-gray-200 shadow max-w-lg mx-auto overflow-hidden">
    <header className="bg-[#FE7500]/20 text-base coxl:text-[22px] font-semibold text-black py-3 px-4">
      {data.title}
    </header>

    <div className="flex flex-col gap-5 p-6 flex-1">
      <div>
        <SectionHeading>
          Overview:{" "}
          <span className="text-sm text-light-gray font-normal leading-relaxed">
            {data.overview}
          </span>
        </SectionHeading>
      </div>

      <div>
        <SectionHeading>Systems Involved:</SectionHeading>
        <BulletList items={data.systems} />
      </div>

      <div>
        <SectionHeading>Objectives:</SectionHeading>
        <BulletList items={data.objectives} />
      </div>

      <div>
        <SectionHeading>Traditional Network Equipment:</SectionHeading>
        <BulletList items={data.equipment} />
      </div>

      <RocketBoxCard
        speed={data.rocketboxSpeed}
        features={data.rocketboxFeatures}
      />
    </div>
  </article>
);

const UseCases: React.FC = () => (
  <section className="py-10 px-2">
    <div className=" mx-auto px-4">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {useCases.map((uc) => (
          <UseCaseCard key={uc.id} data={uc} />
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
