import React from "react";
import Section from "./Section";
import { footerLinks, socials } from "../constants";
import { Link } from "react-router-dom";
import { brainwave } from "../assets";

const Footer = () => {
  return (
  <Section crosses className="!px-0 !py-10">
    <div>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">

        <div className="flex-[1] flex flex-col justify-start">
          <img
            src={brainwave}
            alt="brainwave"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className="text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
          A leading Offshore Development Company. With a solid team of expert IT professionals.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="text-[18px] leading-[27px] text-white relative">
                {footerlink.title}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[65%] h-[2px] bg-white"></span>
              </h4>
              <ul className={`list-none mt-4 grid gap-1 ${footerlink.links.length > 6 ? 'grid-cols-2 gap-x-10' : 'grid-cols-1'}`}>
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`text-[14px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-2" : "mb-0"
                    }`}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © Techosci {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) =>
        item.url.startsWith("/") ? ( // Check if the URL is an internal link
          <Link
            key={item.id}
            to={item.url}
            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
          >
            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
          </Link>
        ) : (
          // For external links, use <a>
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
          >
            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
          </a>
        )
      )}
        </ul>
      </div>
    </div>
  </Section>
  );
};

export default Footer;


const Footer2 = () => {
  return (
  <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © Techosci {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) =>
        item.url.startsWith("/") ? ( // Check if the URL is an internal link
          <Link
            key={item.id}
            to={item.url}
            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
          >
            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
          </Link>
        ) : (
          // For external links, use <a>
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
          >
            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
          </a>
        )
      )}
        </ul>
      </div>
    </Section>
  );
};
