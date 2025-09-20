"use client";
import { useClickOutside } from "@/app/hooks";
import { client } from "@/app/sanity/lib/client";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const HandleOpen = () => setMenuOpen(true);
  const HandleToggle = () => setMenuOpen((x) => !x);
  const HandleClose = () => setMenuOpen(false);

  const menuRef = useRef(null);
  useClickOutside(menuRef, HandleClose);

  const pathname = usePathname();

  const navItems: any = [
    { name: "Products", link: "/product" },
    { name: "Our Tech", link: "/technology" },
    { name: "4 Creatives", link: "/digital-creatives-2" },
    { name: "About Us", link: "/about-us" },
  ];

  return (
    <div className="fixed top-0 left-0 z-30 flex items-center justify-center w-full px-6 bg-white shadow-md">
      <div className="relative flex items-center w-full max-w-[1430px] py-4 ">
        <Link href={"/"}>
          <Image
            className="lg:w-fit w-1/2 h-auto lg:-ml-2 lg:scale-90"
            src={"/media/logos/logo.png"}
            width={230}
            height={40}
            alt="Intelli Connex"
          />
        </Link>
        <div className="lg:flex items-center hidden gap-8 ml-auto">
          {navItems.length > 0 &&
            navItems.map((item: any, index: number) => (
              <Link
                key={index}
                className={`hover:text-primary duration-200 ${
                  pathname === item.link
                    ? "text-primary font-bold"
                    : "font-medium"
                }`}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          <a
            href="https://www.linkedin.com/company/intelliconnex/"
            target="_blank"
          >
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29 29.7353H23.2V19.3654C23.2 16.5207 21.9719 14.9336 19.7693 14.9336C17.3725 14.9336 15.95 16.5874 15.95 19.3654V29.7353H10.15V10.4743H15.95V12.6403C15.95 12.6403 17.7697 9.37757 21.8703 9.37757C25.9724 9.37757 29 11.9353 29 17.2276V29.7353ZM3.5409 7.39389C1.58485 7.39389 0 5.76124 0 3.74773C0 1.73571 1.58485 0.103027 3.5409 0.103027C5.4955 0.103027 7.08034 1.73571 7.08034 3.74773C7.08179 5.76124 5.4955 7.39389 3.5409 7.39389ZM0 29.7353H7.25V10.4743H0V29.7353Z"
                fill="#404040"
              />
            </svg>

            {/* <Image
              width={10}
              height={10}
              src={"/media/logos/linkedin.png"}
              alt="Linkedin"
              className="w-6 h-6 lg:w-5 lg:h-8"
            /> */}
          </a>
          {/* <a href="#" target="_blank">
            <Image
              width={10}
              height={10}
              quality={100}
              src={"/media/logos/facebook.png"}
              alt="Facebook"
              className="w-6 h-6 lg:w-5 lg:h-8"
            />
          </a>
          <a href="#" target="_blank">
            <Image
              width={10}
              height={10}
              quality={100}
              src={"/media/logos/twitter.png"}
              alt="Twitter"
              className="w-6 h-6 lg:w-5 lg:h-8"
            />
          </a> */}
        </div>
        <div ref={menuRef} className="lg:hidden h-fit ml-auto -my-2 -mr-2">
          <button
            onClick={HandleToggle}
            className={`p-2 rounded-lg transition-all duration-300 ${
              menuOpen ? "bg-slate-100 shadow-inner" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
          <div
            className={`top-full text-zinc-500 -right-6 absolute flex flex-col bg-white border transition-all duration-300 ${
              menuOpen ? "opacity-100" : "opacity-0 translate-x-full"
            }`}
          >
            {navItems.length > 0 &&
              navItems.map((item: any, index: number) => (
                <Link
                  key={index}
                  className={`p-4 hover:bg-slate-100 border-b hover:text-primary duration-200 ${
                    pathname === item.link
                      ? "bg-slate-100 text-primary font-bold"
                      : "font-medium"
                  }`}
                  href={item.link}
                >
                  {item.name}
                </Link>
              ))}
            <a
              className="hover:bg-slate-100 active:bg-slate-100 flex items-center pr-6 border-b"
              href="https://www.linkedin.com/company/intelliconnex/"
              target="_blank"
            >
              <div className="p-6">
                <Image
                  width={15}
                  height={15}
                  src={"/media/logos/linkedin.png"}
                  alt="Linkedin"
                />
              </div>
              <div className="bg-slate-200 w-px h-4 mr-6" />
              Linkedin
            </a>
            <a
              className="hover:bg-slate-100 active:bg-slate-100 flex items-center pr-6 border-b"
              href="#"
              target="_blank"
            >
              {" "}
              <div className="p-6">
                <Image
                  className="mx-[2.5px]"
                  width={10}
                  height={15}
                  src={"/media/logos/facebook.png"}
                  alt="Facebook"
                />
              </div>
              <div className="bg-slate-200 w-px h-4 mr-6" />
              Facebook
            </a>
            <a
              className="hover:bg-slate-100 active:bg-slate-100 flex items-center pr-6 border-b"
              href="#"
              target="_blank"
            >
              {" "}
              <div className="p-6">
                <Image
                  width={15}
                  height={15}
                  src={"/media/logos/twitter.png"}
                  alt="Twitter"
                />
              </div>
              <div className="bg-slate-200 w-px h-4 mr-6" />X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
