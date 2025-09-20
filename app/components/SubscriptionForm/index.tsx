"use client";
import { emailRegex } from "@/app/utils";
import { useState } from "react";
import { ChangeEvent } from "react";
import { registerEmail } from "@/app/services";
import Image from "next/image";

export const SubscriptionForm = () => {
  const [formValue, setFormValue] = useState("");

  const [checkingErrors, setCheckingErrors] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const checkValidEmail = (email = formValue) => {
    const isValid = emailRegex.test(email) && email != "";
    setError(!isValid);
    return isValid;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (checkingErrors) {
      checkValidEmail(value);
    }
    setFormValue(value.trim());
  };

  const handleSubmit = () => {
    setCheckingErrors(true);
    if (checkValidEmail()) {
      setIsLoading(true);
      registerEmail(formValue.toLowerCase()).then(() => {
        setIsLoading(false);
        setIsSuccess(true);
      });
    }
  };

  return (
    <>
      <section className="my-16 px-6 md:px-6 md:py-32 flex md:flex-row flex-col gap-4 justify-between items-center  max-w-7xl mx-auto   md:mb-0">
        <Image
          alt="Background"
          src={"/media/cta-bg.jpg"}
          width={1920}
          height={340}
          className="absolute left-0 right-0 lg:h-80 h-96 md:translate-y-0 -translate-y-12 m-auto w-screen -z-10"
        />
        <div className="flex flex-col lg:gap-6 gap-2 max-w-xl text-white">
          <h2 className="text-2xl coxl:text-3xl xl:text-4xl xxl:text-[34px] !leading-snug font-bold">
            Step into the World of Effortless Multigigabit Data Connectivity!
          </h2>
          <p className="text-base  md:text-xl ">
            Subscribe now to receive your daily dose of cutting-edge
            Intelliconnex insights, news, and expert tips.
          </p>
        </div>
        {isSuccess ? (
          <div className="flex flex-col gap-2 text-white">
            <div className="lg:hidden h-px bg-white my-2" />
            <span className="lg:text-xl text-lg font-bold">
              We&apos;ve sent you an email!
            </span>
            <span>Check your inbox to confirm your subscription</span>
          </div>
        ) : (
          <>
            <label
              className={`bg-white rounded flex border w-full max-w-lg p-2 ${
                isLoading ? "" : "hover:bg-zinc-100 cursor-text"
              } focus-within:hover:bg-white relative transition-transform duration-300 lg:mt-0 mt-4 ${
                error ? "translate-y-2" : ""
              }`}
            >
              <p
                className={`text-white text-sm absolute bottom-full transition-opacity duration-300 mb-2 ${
                  error ? "opacity-100" : "opacity-0"
                } `}
              >
                * Please enter a valid email address
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 self-center ml-1 text-orange-300 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>

              <input
                disabled={isLoading}
                readOnly={isLoading}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    handleSubmit();
                  }
                }}
                id="subscription-field"
                value={formValue}
                placeholder="Enter your email"
                type="text"
                className="px-3 w-full outline-none bg-transparent disabled:opacity-50 transition-opacity disabled:selection:bg-transparent duration-500"
              />
              <button
                disabled={error || isLoading}
                onClick={handleSubmit}
                className={`py-2 px-4 rounded md:flex hidden gap-1 group justify-center items-center hover:opacity-80 transition-all duration-300 disabled:from-zinc-300 disabled:to-zinc-300 disabled:pointer-events-none select-none ${
                  isLoading
                    ? "bg-zinc-200 text-transparent"
                    : "bg-gradient-to-r  from-orange-500 to-orange-300 text-white"
                }`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 rounded-full border-2 border-zinc-300 border-t-zinc-400 animate-spin absolute" />
                ) : (
                  <></>
                )}
                Subscribe{" "}
                {/* <span className="whitespace-nowrap group-hover:translate-x-1 transition-transform duration-300">
                  {"->"}
                </span> */}
              </button>
            </label>
            <button
              disabled={error || isLoading}
              onClick={handleSubmit}
              className={`py-2 px-4 rounded md:hidden w-full justify-center flex gap-1 group hover:opacity-80 transition-opacity duration-300 disabled:from-zinc-300 disabled:to-zinc-300 disabled:pointer-events-none select-none ${
                isLoading
                  ? "bg-zinc-200 text-transparent"
                  : "bg-gradient-to-r  from-orange-500 to-orange-300 text-white"
              }`}
            >
              {isLoading ? (
                <div className="w-6 h-6 rounded-full border-2 border-zinc-300 border-t-zinc-400 animate-spin absolute" />
              ) : (
                <></>
              )}
              Subscribe{" "}
              {/* <span className="whitespace-nowrap group-hover:translate-x-1 transition-transform duration-300">
                {"->"}
              </span> */}
            </button>
          </>
        )}
      </section>
    </>
  );
};
