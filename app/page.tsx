import { Metadata } from "next";
import {
  AreYouReady,
  Articles,
  CallToAction,
  ClutterFree,
  Connectivity,
  Eco,
  Fastest,
  Features,
  Hero,
  Performance,
  ProductShowcase,
  Security,
  SubscriptionForm,
  UsbC,
} from "./components";
import { WifiSpeed } from "./components/WifiSpeed";
import { string } from "zod";
import LocalDataTransfer from "./components/LocalDataTransfer";
import CloudSharing from "./components/CloudSharing";
import LearnRocketbox from "./components/LearnRocketbox";
import CreativeNetwork from "./components/CreativeNetwork";
import DirectData from "./components/DirectData";
import DigitalCreatives from "./components/DigitalCreatives";
import PortableConnectivity from "./components/PortableConnectivity";
import UseCases from "./components/UseCase";

export const metadata: Metadata = {
  title: "Multigigabit Data Intelligent System Connectivity",
  description:
    "Experience the power of Multigigabit Connectivity. Intelli Connex for intelligent data interconnection platforms and effortless data transfer. Unlock seamless connectivity today.",
};

export default function Home() {
  return (
    <div className="main max-w-[1460px] w-full mx-auto">
      <Hero />
      <AreYouReady />
      <LocalDataTransfer />
      <CloudSharing />
      <Articles limit={3} />
      <WifiSpeed />
      <LearnRocketbox />

      {/*Learn Rocketbox reUse component   */}

      <UsbC />
      {/* reUse component   */}
      <CallToAction
        title={["Plug & Play Connectivity", "Make Data Networks Simple"]}
        paragraphs={[
          "Forget Network configuration complexity",
          "Whether you use technology for work or pleasure, our mission is simple: deliver seamless and reliable connectivity between all your systems.",
          "Plug & Play operation delivers universal compatibility to connect systems at the fastest speeds without the need for expensive dongles and adapters.",
          "Create an integrated workspace that can seamlessly access files across all your systems.",
        ]}
        imagePath="plug-play.png"
        reverseOrder={true}
        backImage={false}
      />
      <CallToAction
        title={["Save Time and Effort with", "Fastest USB Data Transfers"]}
        paragraphs={[
          "Whether it's through external drives or direct cable connections, data transfers between systems using USB remain a preferred choice.",
          "Cloud solutions and high-speed wireless connections can offer flexibility and remote access but only USB remains a trusted, accessible method for moving data—especially when speed, security, or operational simplicity is paramount.",
          "Tens of billions of systems are already fitted with the fastest file access through USB. Let’s get them connected.",
          "Experienced users value in transferring data between systems using USB, and this need is especially pronounced in certain scenarios.",
        ]}
        imagePath="usb-data.webp"
        reverseOrder={false}
        backImage={true}
        addSpace="mt-5 lg:mt-10 "
      />
      <div className="-mt-10 md:-mt-0">
        <ClutterFree />
      </div>
      <CreativeNetwork />
      <DirectData />
      <DigitalCreatives />
      <div className="-mt-20 md:-mt-0">
        <UseCases />
      </div>
      <PortableConnectivity />
      <SubscriptionForm />

      {/* reUse Performance component   */}
      {/* <CallToAction
        title={["Intelligent System Connectivity:", "IntelliConnex"]}
        paragraphs={[
          "Harness the intelligence of your existing systems to create the fastest, most secure, most energy efficient and simplest data interconnection platforms that rival today’s most advanced data centers. ",
          "Together we will transform the future of end-user computing.",
          "Welcome to a future where data transfer is effortless, streamlined and universal.",
        ]}
        imagePath="Connectivity.png"
        reverseOrder={true}
        backImage={true}
        addSpace="mt-5 lg:mt-10 "
      /> */}
      <div className=" md:my-4">
        <Performance
          title={["Intelligent System Connectivity:", "IntelliConnex"]}
          paragraphs={[
            "Harness the intelligence of your existing systems to create the fastest, most secure, most energy efficient and simplest data interconnection platforms that rival today’s most advanced data centers. ",
            "Together we will transform the future of end-user computing.",
            "Welcome to a future where data transfer is effortless, streamlined and universal.",
          ]}
          boldParagraph="Improve the way you connect and work forever!"
          imagePath="Connectivity.png"
          reverseOrder={false}
          backImage={true}

          // showButton="button1"
        />
      </div>
      {/* <Fastest /> */}
      {/* <Connectivity /> */}
      {/* <ProductShowcase /> */}
      {/* <Features /> */}
      {/* <Eco /> */}

      {/* <Security /> */}
    </div>
  );
}
