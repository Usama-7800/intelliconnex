import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-slate-100 flex flex-col items-center justify-center w-full px-6">
      <div className="lg:flex-row flex flex-col items-center w-full max-w-[1380px] gap-8 py-12">
        <div className="flex flex-col gap-4">
          <Image
            src={"/media/logos/logo.png"}
            width={250}
            height={40}
            alt="Intelli Connex"
          />
          <span>Innovative Connectivity for Limitless Creativity.</span>
          <ul className="text-zinc-500 flex flex-col gap-1 text-sm space-y-2">
            <li className="flex gap-2 items-start justify-start -ml-1">
              {" "}
              <Image
                src={"/media/icons/location.svg"}
                width={28}
                height={10}
                alt="Intelli Connex"
              />
              Catalyst Commons 210 - 137 Glasgow
              <br /> Street, Suite 400 Kitchener, ON | N2G 4X8
            </li>
            {/* <li className="flex gap-2 items-center justify-start">
              {" "}
              <Image
                src={"/media/icons/phone.svg"}
                width={22}
                height={10}
                alt="Intelli Connex"
              />
              +47-448445555
            </li> */}
            <li className="flex gap-2 items-center justify-start">
              {" "}
              <Image
                src={"/media/icons/email.svg"}
                width={22}
                height={10}
                alt="Intelli Connex"
              />
              info@intelliconnex.com
            </li>
            <li className="flex gap-2 items-center justify-start">
              {" "}
              <Image
                src={"/media/icons/site.svg"}
                width={22}
                height={10}
                alt="Intelli Connex"
              />
              www.intelliconnex.com
            </li>
          </ul>
        </div>

        <div className="lg:ml-auto flex flex-col justify-center items-center gap-4">
          <span className="text-2xl">Connect with us</span>
          <div className="flex justify-center  gap-4 lg:ml-auto">
            <a href="https://www.linkedin.com/company/intelliconnex/">
              <svg
                width="32"
                height="34"
                viewBox="0 0 32 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32 33.5531H25.6V22.1105C25.6 18.9716 24.2448 17.2203 21.8144 17.2203C19.1696 17.2203 17.6 19.0451 17.6 22.1105V33.5531H11.2V12.2996H17.6V14.6897C17.6 14.6897 19.608 11.0894 24.1328 11.0894C28.6592 11.0894 32 13.9118 32 19.7516V33.5531ZM3.9072 8.90056C1.7488 8.90056 0 7.09902 0 4.87721C0 2.65704 1.7488 0.855469 3.9072 0.855469C6.064 0.855469 7.81279 2.65704 7.81279 4.87721C7.81439 7.09902 6.064 8.90056 3.9072 8.90056ZM0 33.5531H8V12.2996H0V33.5531Z"
                  fill="#6E6E73"
                />
              </svg>
            </a>

            {/* <a href="#">
              <Image
                width={20}
                height={30}
                src={"/media/icons/facebook.svg"}
                alt="Facebook"
              />
            </a>
            <a href="#">
              <Image
                width={30}
                height={30}
                src={"/media/logos/twitter-x.png"}
                alt="Twitter"
              />
            </a> */}
          </div>
        </div>
      </div>
      <div className="w-fit flex flex-col items-center text-center text-light-gray">
        <span className="mb-4 text-xs">Privacy Policy | Terms of Use</span>
        <span className="mb-4 text-xs">
          @ 2023 intelliConnex. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
