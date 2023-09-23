import React from "react";
import { NinthSection } from "./styled";
import checker from "../../../assets/list terms.svg";
import lock from '../../../assets/lock.png'
import goldenKey from '../../../assets/guyWithKey.png'
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function SectionNine() {
    const navigate = useNavigate();

  return (
    <NinthSection>
      <div className="block lg:flex justify-evenly p-[3rem] lg:p-[6.5rem]">
        <div className="">
          <p className="text-white text-center lg:text-start text-lg lg:text-3xl font-ClashDisplay-Bold">
            Privacy Policy and
          </p>
          <p className="text-primary text-center lg:text-start text-lg lg:text-3xl font-ClashDisplay-Bold">
            Terms
          </p>
          <div className="text-white text-opacity-75 text-center lg:text-start font-montserrat mt-4 mb-10 text-xs lg:text-sm leading-6">
            <span className="lg:block">Last updated on September 12, 2023</span>
          </div>
          <div className="text-white  text-center lg:text-start font-montserrat mt-4 text-xs mb-10 lg:text-sm leading-6">
            <span className="lg:block">
              Below are our privacy & policy, which outline a lot of goodies.
            </span>
            <span className="lg:block">
              it’s our aim to always take care of our participant
            </span>
          </div>
          <div className="border border-primary bg-purple-500 bg-opacity-5 p-6 lg:p-12">
            <div className=" text-white font-montserrat text-center lg:text-start text-xs lg:text-sm leading-5 lg:leading-6">
              <span className="lg:block">
                At getlinked tech Hackathon 1.0, we value your privacy
              </span>
              <span className="lg:block">
                and are committed to protecting your personal information.
              </span>
              <span className="lg:block">
                This Privacy Policy outlines how we collect, use, disclose,
              </span>
              <span className="lg:block">
                and safeguard your data when you participate in our tech
              </span>
              <span className="lg:block">
                hackathon event. By participating in our event, you consent
              </span>
              <span className="lg:block">
                to the practices described in this policy.
              </span>
            </div>
            <div className="mt-8">
              <span className="font-montserrat text-sm lg:text-base font-bold text-primary block">
                Licensing Policy
              </span>
              <span className="font-montserrat text-xs font-bold text-white lg:text-sm ">
                Here are terms of our Standard License:
              </span>
            </div>
            <div className="flex mt-4">
              <img src={checker} alt="list items" />
              <div className="mx-3 text-white font-montserrat text-xs lg:text-sm leading-6">
                <span className="lg:block">
                  The Standard License grants you a non-exclusive right to
                </span>
                <span className="lg:block">
                  navigate and register for our event
                </span>
              </div>
            </div>
            <div className="flex my-6">
              <img src={checker} alt="list items" />
              <div className="mx-3 text-white font-montserrat text-xs lg:text-sm leading-6">
                <span className="lg:block">
                  You are licensed to use the item available at any free source
                </span>
                <span className="lg:block">
                  sites, for your project developement
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                name={"Read More"}
                onClick={() => navigate("/hackathon/contact-form")}
              />
            </div>
          </div>
        </div>
        <div className="flex  w-1/2 relative">
          <div className="ml-36">
            <img src={lock} alt="lock" />
          </div>
          <div className="absolute">
            <img
              src={goldenKey}
              alt="guy with key"
              style={{
                width: "450px",
                marginLeft: "130px",
                marginTop: "190px",
              }}
            />
          </div>
        </div>
      </div>
    </NinthSection>
  );
}

export default SectionNine;
