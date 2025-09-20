import Link from "next/link";
import { Articles } from "../components";

export default async function Blog() {
  return (
    <div className="mt-12">
      <Link
        href={`/#articles`}
        className="text-orange-500 hover:underline text-[14px] mt-auto mr-auto -mb-4"
      >
        {"<-"} Go back to Home
      </Link>
      <Articles />
    </div>
  );
}
