"use client";

import { Footer, Header } from ".";
import { usePathname } from "next/navigation";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return pathname.includes("/studio") ? (
    <div className="w-full">{children}</div>
  ) : (
    <div>
      <Header />
      <div className="lg:mt-[75px] mt-14  ">{children}</div>
      <Footer />
    </div>
  );
};
