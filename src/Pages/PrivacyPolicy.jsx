import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useRef } from "react";
import Section from "../components/Section";
import { BackgroundCircles, BottomLine, Gradient } from "../components/design/Hero";
import { curve } from "../assets";
import { privacyData } from "../constants";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        {/* Privacy Policy Content */}
        <Section
          className="pt-[12rem] -mt-[5.25rem]"
          crosses
          crossesOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="PrivacyPolicy"
        >
          <div className="container relative">
          {/*<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />*/}
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
              <h1 className="h1 mb-6">
                Privacy&nbsp;{` `}
                <span className="inline-block relative">
                  Policy
                  <img
                    src={curve}
                    className="absolute top-full left-0 w-full xl:-mt-2"
                    width={624}
                    height={28}
                    alt="Curve"
                  />
                </span>
              </h1>
              <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">{privacyData.title}</p>
            </div>

            <div className="space-y-8">
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
                {privacyData.data.map((data, index) => (
                  <div key={index}>
                    <h2 className="h4 mb-4">{data.title}</h2>
                    <p className="body-2 text-n-3">{data.desc}</p>
                  </div>
                ))}
            </div>

            <div className="pb-16"/>
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <Gradient />
            </div>
            <BackgroundCircles />
          </div>
        </Section>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default PrivacyPolicy;

