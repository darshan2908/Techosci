import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useRef } from "react";
import Button from "../components/Button";
import Section from "../components/Section";
import { BackgroundCircles, BottomLine, Gradient } from "../components/design/Hero";
import { curve } from "../assets";
import { aboutData } from "../constants";

const AboutUS = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />  
          <Section
          className="pt-[12rem] -mt-[5.25rem]"
          crosses
          crossesOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="about"
          >
          <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
              <h1 className="h1 mb-6">
                About&nbsp;{` `}
                <span className="inline-block relative">
                  Techosci
                  <img
                    src={curve}
                    className="absolute top-full left-0 w-full xl:-mt-2"
                    width={624}
                    height={28}
                    alt="Curve"
                  />
                </span>
              </h1>
              <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">{aboutData.title}</p>
              <Button>Contact Us</Button>
            </div>
            
            <div className="relative max-w-3xl mx-auto text-center bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl p-8 lg:p-12">
              <ul>
                {aboutData.data.map((data, index) => (
                  <li key={index}>
                    <h2 className="h2 mb-4">{data.title}</h2>
                    <p className="body-2 mb-6">{data.desc}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="pb-16"></div>
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

export default AboutUS;