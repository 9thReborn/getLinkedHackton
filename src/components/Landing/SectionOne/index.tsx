import React from "react";
import { FirstSection } from "./styled";
import vector from "../../../assets/Vector 4.svg";
import chain from "../../../assets/chain-9365116-7621444.png";
import Button from "components/Button/Button";
import visionGuy from "../../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import blue from "../../../assets/Image 1.png";

import { useNavigate } from "react-router-dom";

import Countdown from "react-countdown";

const Renderer = ({
  hours,
  minutes,
  seconds,
}: {
  hours: any;
  minutes: any;
  seconds: any;
}) => {
  return (
    <>
      <span className="font-unica">
        {hours}
        <span className="font-montserrat text-sm">H</span> :
      </span>
      <span className="font-unica">
      {" "}  {minutes}
        <span className="font-montserrat text-sm">M</span> :
      </span>
      <span className="font-unica">
       {" "} {seconds}
        <span className="font-montserrat text-sm">S</span> 
      </span>
    </>
  );
};

function SectionOne() {
  const navigate = useNavigate();

  return (
    <FirstSection>
      <div className="mr-20 mt-5">
        <div className="flex justify-end text-sm lg:text-3xl text-white font-montserrat italic font-bold  ">
          <h3>Igniting a Revolution in HR Innovation</h3>
        </div>
        <div className="flex justify-end">
          <img
            src={vector}
            alt="vector"
            style={{ width: "253px", height: "auto" }}
          />
        </div>
      </div>
      <div className=" block  m-auto lg:flex lg:justify-center lg:items-center mt-4 relative">
        <div className=" p-12 lg:ml-14">
          <div className="">
            <div className="flex justify-end w-3/4 animate-bounce">
              <img
                src={require("../../../assets/bulb.png")}
                alt="yellow bulb"
                className="w-8 h-8 lg:w-14 lg:h-16"
              />
            </div>
            <span className="text-white text-center lg:text-left text-3xl md:text-5xl lg:text-7xl font-ClashDisplay-Bold block">
              getlinked Tech
            </span>

            <div className="flex lg:justify-start justify-center lg:items-center">
              <span className="text-white text-center lg:text-left text-3xl md:text-5xl lg:text-7xl font-ClashDisplay-Bold">
                Hackathon{" "}
                <span className="text-primary text-center lg:text-left text-3xl md:text-5xl lg:text-7xl">
                  1.0
                </span>
              </span>
              <img
                src={chain}
                alt="mixed chain"
                className="w-8 h-8 lg:w-16 lg:h-16"
              />
              <img
                src={require("../../../assets/fire.png")}
                alt="fire"
                className="w-8 h-8 lg:w-16 lg:h-16"
              />
            </div>
          </div>
          <p className="text-white lg:w-[70%] font-montserrat text-sm lg:text-xl my-2 text-center lg:text-left ">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
        
            <Button
              name={"Register"}
              onClick={() => navigate("/hackathon/registration")}
              className="my-10 block mx-auto lg:hidden"
            />
            <Button
              name={"Register"}
              onClick={() => navigate("/hackathon/registration")}
              className="my-10 md:block  hidden"
            />
         
          <div className=" text-white text-6xl my-5">
            <Countdown renderer={Renderer} date={Date.now() + 86400 * 1000} />
          </div>
        </div>
        <div className="">
          <div className="flex justify-center">
            <div className="absolute mt-10" id="left">
              <img src={visionGuy} alt="success" />
            </div>
            <div className="" id="right" style={{ left: "0", zIndex: "1" }}>
              <img src={blue} alt="successfulMan" className="animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </FirstSection>
  );
}

export default SectionOne;
