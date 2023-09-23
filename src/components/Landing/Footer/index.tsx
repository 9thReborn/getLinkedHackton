import React from "react";
import { FooterContainer } from "./styled";
import VerticalLine from "components/StraightLine/veritcalLine";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import telephone from "../../../assets/telephone.png";
import location from "../../../assets/locationIcon.svg";

function Footer() {
  return (
    <FooterContainer>
      <div className="lg:flex justify-evenly ">
        <div>
          <p className="text-white text-3xl font-ClashDisplay-Bold">
            get<span className="text-primary">linked</span>
          </p>
          <div className="text-white  font-montserrat mt-4 mb-10 text-xs lg:text-sm leading-6">
            <span className="lg:block">
              Getlinked Tech Hackathon is a technology innovation program
            </span>
            <span className="lg:block">
              established by a group of organizations with the aim of showcasing
            </span>
            <span className="lg:block">
              young and talented individuals in the field of technology
            </span>
          </div>
          <div className="flex items-center mt-5 lg:mt-14 text-white  font-montserrat  text-xs lg:text-sm leading-6">
            <span className="mr-4">Terms of Use</span>
            <VerticalLine height={20} thickness={2} color="#D434FE" />
            <span className="ml-4">Privacy Policy</span>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <span className="font-montserrat  text-sm text-primary font-semibold">
            Useful Links
          </span>
          <div className="font-montserrat text-xs text-white">
            <span className="block my-5">Overview</span>
            <span className="block mb-5">Timeline</span>
            <span className="block mb-5">FAQs</span>
            <span className="block mb-5">Register</span>
            <div className="flex items-center mt-3 gap-3">
              <span className="text-primary">Follow us</span>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com/lastborn_Adin"
                target="_blank"
                rel="noreferrer"
              >
                <RiTwitterXFill />
              </a>
              <a
                href="https://www.facebook.com/silas-adinoyi"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/silas-adinoyi-368360182/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <span className="font-montserrat text-sm text-primary font-semibold">
            Contact Us
          </span>
          <div className="font-montserrat text-xs text-white">
            <div className="flex items-center gap-4">
              <img
                src={telephone}
                alt="telephone"
                style={{ width: "10px", height: "12px" }}
              />
              <span className="block my-5">+234 6707653444</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={location} alt="location" />
              <span className="block mb-5">
                27,Alara Street <span className="block">Yaba 100012</span> Lagos
                State
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <span className="text-white font-montserrat text-xs ">
          All rights reserved. © getlinked Ltd.
        </span>
      </div>
    </FooterContainer>
  );
}

export default Footer;
