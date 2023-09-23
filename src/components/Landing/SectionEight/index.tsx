import React from "react";
import { EighthSection } from "./styled";
import VerticalLine from "components/StraightLine/veritcalLine";
import HorizontalLine from "components/StraightLine/horizontalLine";
import LibertyImage from "../../../assets/Liberty-company-image.png";
import LibertyLogo from "../../../assets/Liberty-company-logo.png";
import Whispersms from "../../../assets/wisper-chat.png";
import Winwise from "../../../assets/Winwise-logo.png";
import Paybox from "../../../assets/Paybox.png";
import Vuzal from "../../../assets/Vizual Plus.png";

function SectionEight() {
  return (
    <EighthSection>
      <div className="flex justify-center">
        <h2 className=" text-lg lg:text-3xl font-ClashDisplay-Bold text-white">
          Partners and Sponsors
        </h2>
      </div>
      <div className="text-center text-white font-montserrat text-xs lg:text-sm mt-2">
        <span className="lg:block mb-2">
          Getlinked Hackathon 1.0 is honored to have the following major
        </span>
        companies as its partners and sponsors
      </div>
      <div className="border border-primary p-8 lg:p-10 mt-20 mb-10">
        {/**==================for mobile=============== */}
        <div className="flex justify-evenly items-center lg:hidden ">
          <div>
            <img
              src={LibertyImage}
              alt="LibertyImage"
              className="w-[31.99px] h-[30.234px] shrink-0"
            />
          </div>
          <div>
            <VerticalLine height={44} thickness={3} color="#D434FE" />
          </div>
          <div>
            <img
              src={LibertyLogo}
              alt="Libertylogo"
              className="w-[56.567px] h-[10.728px] shrink-0"
            />
          </div>
          <div>
            <VerticalLine height={44} thickness={3} color="#D434FE" />
          </div>
          <div>
            <img
              src={Winwise}
              alt="Winwise"
              className="w-[34.916px] h-[28.479px] shrink-0"
            />
          </div>
        </div>
        <div className=" lg:hidden ">
          <HorizontalLine thickness={2} color="#D434FE" />
        </div>
        <div className="flex justify-evenly items-center  lg:hidden">
          <div>
            <img
              src={Whispersms}
              alt="Whispersms"
              className="w-[39.012px] h-[29.064px] shrink-0 ml-1"
            />
          </div>
          <div>
            <VerticalLine height={44} thickness={3} color="#D434FE" />
          </div>
          <div>
            <img
              src={Paybox}
              alt="paybox"
              className="w-[65.227px] h-[15.462px] shrink-0 "
            />
          </div>
          <div>
            <VerticalLine height={44} thickness={3} color="#D434FE " />
          </div>
          <div>
            <img
              src={Vuzal}
              alt="vuzal"
              className="w-[45px] h-[21px] shrink-0  "
            />
          </div>
        </div>

        {/**=========for desktop =================== */}
        <div className=" hidden lg:flex w-3/4 p-10 ml-24">
          <div className=" p-5 ml-12  ">
            <div className=" ">
              <img
                src={LibertyImage}
                alt="LibertyImage"
                className="shrink-0 ml-14"
              />
            </div>
            <div className="my-5">
              <HorizontalLine className="mt-4" thickness={3} color="#D434FE" />
            </div>
            <div className="ml-14">
              <img src={Whispersms} alt="Whispersms" className="shrink-0" />
            </div>
          </div>
          <div className="flex flex-col mx-2">
            <div className="mx-2">
              <VerticalLine height={130} thickness={3} color="#D434FE" />
            </div>
            <div className="mx-2 mt-10">
              <VerticalLine height={130} thickness={3} color="#D434FE" />
            </div>
          </div>
          <div className=" p-3 m-auto">
            <div className=" ml-3 mt-2">
              <img src={LibertyLogo} alt="Libertylogo" className="shrink-0" />
            </div>
            <div className="my-16">
              <HorizontalLine className="mt-3" thickness={3} color="#D434FE" />
            </div>
            <div className="ml-5">
              <img src={Paybox} alt="paybox" className="shrink-0" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mx-5">
              <VerticalLine height={130} thickness={3} color="#D434FE" />
            </div>
            <div className="mx-5 mt-10">
              <VerticalLine height={130} thickness={3} color="#D434FE" />
            </div>
          </div>
          <div className=" p-3">
            <div className="ml-8">
              <img src={Winwise} alt="Winwise" className="shrink-0" />
            </div>
            <div className="mb-16 mt-8">
              <HorizontalLine className="mt-4" thickness={3} color="#D434FE" />
            </div>
            <div className=" ">
              <img src={Vuzal} alt="vuzal" className="shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </EighthSection>
  );
}

export default SectionEight;
