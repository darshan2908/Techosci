import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { useRef } from "react";
import { heroBackground, robot } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";
import { BackgroundCircles } from "../components/design/Hero";

const NotFound = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <PageNotFound />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
  };
  
  export default NotFound;

  const PageNotFound = () => {
    const parallaxRef = useRef(null);
    return (
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative flex flex-col justify-center items-center min-h-screen">
          {/* Centered content */}
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold mb-2">404</h1>
            <p className="text-2xl font-medium">Page Not Found</p>
          </div>
          {/* Background Image and Circles */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
  
          <BackgroundCircles />
        </div>

      </Section>
    );
  };