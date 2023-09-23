import React from "react";
import { SeventhSection } from "./styled";
import trophy from "../../../assets/trophy.png";
import gold from "../../../assets/gold_medal 1.png";
import silver from "../../../assets/silver_medal 1.png";
import bronze from "../../../assets/bronze_medal 1.png";



function SectionSeven() {
  return (
    <SeventhSection>
      <div className="flex justify-center lg:justify-end mr-0 lg:mr-64">
        <p className="text-white text-3xl font-ClashDisplay-Bold">
          Prizes and
          <span className="text-primary ml-2 lg:ml-0 text-3xl font-ClashDisplay-Bold block">
            Rewards
          </span>
        </p>
      </div>
      <div className="flex justify-center lg:justify-end mr-0 lg:mr-16">
        <div className="text-center lg:text-start text-white font-montserrat mt-4 mb-10 text-sm leading-6">
          <span className="lg:block">
            Highlight of the prizes or rewards for winners and
          </span>{" "}
          for participants
        </div>
      </div>
      <div className=" w-full lg:hidden block">
        <img src={trophy} alt="winners" style={{ width: "900px" }} />
      </div>

      <div className="flex gap-3 mt-14 lg:hidden">
        <div className="relative">
          <div className="absolute right-5">
            <img src={silver} alt="" className="w-16 h-16 " />
          </div>
          <div className="border border-primary bg-purple-500 bg-opacity-20 p-5 rounded-xl shadow-md mt-5 ">
            <div className="text-center mt-10">
              <span className="text-white font-montserrat font-bold text-xs block">
                2nd
              </span>
              <span className="text-white font-montserrat font-bold text-xs block mb-1">
                Runner
              </span>
              <span className="text-primary font-bold font-montserrat text-xs mt-1">
                N300,000
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute right-3 -top-3">
            <img src={gold} alt="" className="w-20 h-20" />
          </div>
          <div className="border border-primary bg-purple-500 bg-opacity-20 p-5 rounded-xl shadow-md mt-5 ">
            <div className="text-center mt-14">
              <span className="text-white font-montserrat font-bold text-xs block">
                1st
              </span>
              <span className="text-white font-montserrat font-bold text-xs block mb-1">
                Runner
              </span>
              <span className="text-primary font-bold font-montserrat text-xs mt-1">
                N400,000
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute right-5">
            <img src={bronze} alt="" className="w-16 h-16 " />
          </div>
          <div className="border border-primary bg-purple-500 bg-opacity-20 p-5 rounded-xl shadow-md mt-5 ">
            <div className="text-center mt-10">
              <span className="text-white font-montserrat font-bold text-xs block">
                3rd
              </span>
              <span className="text-white font-montserrat font-bold text-xs block mb-1">
                Runner
              </span>
              <span className="text-primary font-bold font-montserrat text-xs mt-1">
                N150,000
              </span>
            </div>
          </div>
        </div>
      </div>

      {/** =============for desktop================ */}
      <div className="flex justify-center items-center  ">
        <div className=" w-full hidden lg:block ml-10 ">
          <img src={trophy} alt="winners" style={{ width: "900px" }} />
        </div>
        <div className=" hidden lg:flex mt-32">
          <div className="relative">
            <div className="">
              <img
                src={silver}
                alt="second place"
                style={{
                  position: "absolute",
                  top: -90,
                  zIndex: 5,
                  marginLeft: "50px",
                  marginBottom: "50px",
                }}
              />
            </div>

            <div className="border border-primary bg-purple-500 bg-opacity-20 p-10 rounded-xl shadow-md ml-5 relative">
              <div className="text-center mt-24">
                <span className="text-white font-montserrat font-bold text-3xl block">
                  2nd
                </span>
                <span className="text-white font-montserrat font-bold text-3xl block mb-5">
                  Runner
                </span>
                <span className="text-primary font-bold font-montserrat text-3xl mt-5">
                  N300,000
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="">
              <img
                src={gold}
                alt="first place"
                style={{
                  position: "absolute",
                  top: -150,
                  zIndex: 5,
                  marginLeft: "10px",
                  marginBottom: "50px",
                }}
              />
            </div>
            <div className="border border-purple-600 bg-purple-600 bg-opacity-5 p-10 rounded-xl shadow-md h-80 ml-5 relative">
              <div className="text-center mt-28">
                <span className="text-white font-montserrat font-bold text-3xl block ">
                  1st
                </span>
                <span className="text-white font-montserrat font-bold text-3xl block mb-10">
                  Runner
                </span>

                <span className="text-primary font-bold font-montserrat text-3xl mt-10">
                  N400,000
                </span>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="w-10 ">
              <img
                src={bronze}
                alt="third place"
                style={{
                  position: "absolute",
                  top: -90,
                  zIndex: 5,
                  marginLeft: "50px",
                  marginBottom: "50px",
                }}
              />
            </div>
            <div className="border border-primary bg-purple-500 bg-opacity-20 p-10 rounded-xl shadow-md ml-5 relative">
              <div className="text-center mt-24">
                <span className="text-white font-montserrat font-bold text-3xl block">
                  3rd
                </span>
                <span className="text-white font-montserrat font-bold text-3xl block mb-5">
                  Runner
                </span>
                <span className="text-primary font-bold font-montserrat text-3xl mt-5">
                  N150,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SeventhSection>
  );
}

export default SectionSeven;
