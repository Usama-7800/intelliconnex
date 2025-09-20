"use client";
import React, { useState } from "react";
import Icon from "@/components/Icon/FaqsPlusMinus";

const Faqs = ({ data }: { data: Array<any> }) => {
  const [isOpen, setOpen] = useState(-1);

  const [activeTab, setActiveTab] = useState(0);

  const [tabs, setTabs] = useState(data);

  const toggleFAQ = (id: number) => {
    if (id === isOpen) {
      setOpen(-1);
    } else {
      setOpen(id);
    }
  };
  return (
    <div className=" bg-[#F8F8F8] ">
      <div className="main max-w-[1460px] w-full mx-auto">
        {/* Faq Tabs */}
        {tabs.length > 1 ? (
          <div className="flex flex-wrap gap-y-4 gap-x-4 md:gap-x-6 lg:gap-8 justify-center mx-4 md:w-10/12   md:!mx-auto items-baseline pb-10">
            {tabs.map((item: any, index: number) => (
              <button
                onClick={() => {
                  setActiveTab(index);
                  setOpen(-1);
                }}
                key={index}
                className={
                  `duration-300 flex-[1_1_calc(33.333%-16px)] text-xs sm:text-base border max-w-[200px] rounded-full px-2 py-3 md:text-lg lg:text-xl text-light-gray font-medium ` +
                  (activeTab === index
                    ? "bg-primary pointer-events-none cursor-pointer text-white border-primary"
                    : "border-light-gray hover:border-primary hover:bg-primary hover:text-white")
                }
              >
                {item.name}
              </button>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      {/* Faq Questions */}
      <div className="bg-white ">
        <div className="bg-white main max-w-[1460px] w-full mx-auto">
          <div
            className={`md:px-5 md:w-11/12 md:mx-auto space-y-7 pt-20 pb-24 mx-4 md:mx-0  ${
              tabs.length > 1 && "mt-10"
            }`}
          >
            {tabs[activeTab]?.content.map((faq: any, index: number) => (
              <div key={index}>
                {faq.sectionTitle ? (
                  <div key={`section-${index}`} className="my-8 pt-6 ">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[30px]">
                      <span
                        dangerouslySetInnerHTML={{ __html: faq.sectionTitle }}
                      ></span>
                      {/* {faq.sectionTitle} */}
                    </h4>
                  </div>
                ) : null}
                <div
                  className={`accordion-wrapper shadow-[0px_5px_16px] duration-300 border-2 border-transparent rounded-xl ${
                    isOpen === index ? "open" : ""
                  }`}
                >
                  <h3
                    className={`p-5 sm:p-7 accordion-title flex items-center cursor-pointer justify-between gap-x-8 text-base md:text-lg lg:text-xl font-semibold text-gray-900`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: faq.question }}
                    ></span>
                    <div
                      className={`accordian-icon ${
                        isOpen == index
                          ? "rotate-90 bg-primary text-white"
                          : "text-primary"
                      }`}
                    >
                      <Icon />
                    </div>
                  </h3>
                  <div
                    className={`accordion-item  ${
                      isOpen !== index && "collapsed"
                    }`}
                  >
                    <div
                      className="px-5 pb-5 sm:px-7 sm:pb-7 text-base font-normal leading-6 faq-content text-light-gray  md:mr-16"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
