import React from "react";
import { FifthSection } from "./styled";
import HorizontalLine from "components/StraightLine/horizontalLine";
import thinkingMan from '../../../assets/thinkingMan.png'
import question from '../../../assets/questionMark.png'
import bigQ from '../../../assets/bigQ.png'

function SectionFive() {
  return (
    <FifthSection>
      <div className="lg:flex justify-around items-center gap-10">
        <div className=" lg:ml-10 lg:w-[35%]">
          <p className="text-white text-center lg:text-left text-3xl font-ClashDisplay-Bold">
            Frequently Ask
          </p>
          <p className="text-primary text-center lg:text-left text-3xl font-ClashDisplay-Bold">
            Question
          </p>
          <div className="text-white text-center lg:text-left font-montserrat mt-4 mb-10 text-sm leading-6">
            <span className="lg:block">
              We got answers to the questions that you might
            </span>
            <span className="lg:block">
              want to ask about getlinked Hackathon 1.0
            </span>
          </div>
          <div className="my-8 relative">
            <div className="flex items-center gap-3">
              <span className="text-white font-montserrat text-sm">
                Can I work on a project I started before the hackathon?
              </span>
              <span className="text-primary text-md lg:text-lg font-montserrat absolute right-1 ml-10 mt-4 ">
                +
              </span>
            </div>
            <HorizontalLine className='mt-2' thickness={1} color="#D434FE" />
          </div>
          <div className="my-8 relative">
            <div className="flex items-center gap-3">
              <span className="text-white font-montserrat text-sm">
                What happens if I need help during the hackathon?
              </span>
              <span className="text-primary mt-4 lg:mt-0 text-xl font-montserrat absolute right-1">
                +
              </span>
            </div>
            <HorizontalLine className='mt-2' thickness={1} color="#D434FE" />
          </div>
          <div className="my-8 relative">
            <div className="flex items-center gap-3">
              <span className="text-white font-montserrat text-sm">
                What happens if I don't have an idea for a project?
              </span>
              <span className="text-primary mt-4 lg:mt-0 text-xl font-montserrat absolute right-1">
                +
              </span>
            </div>
            <HorizontalLine className='mt-2' thickness={1} color="#D434FE" />
          </div>
          <div className="my-8 relative">
            <div className="flex items-center gap-3">
              <span className="text-white font-montserrat text-sm">
                Can I join a team or do I have to come with one?
              </span>
              <span className="text-primary mt-4 lg:mt-0 text-xl font-montserrat absolute right-1">
                +
              </span>
            </div>
            <HorizontalLine className='mt-2' thickness={1} color="#D434FE" />
          </div>
          <div className="my-8 relative">
            <div className="flex items-center gap-3">
              <span className="text-white font-montserrat text-sm">
                What happens after the hackathon ends
              </span>
              <span className="text-primary mt-4 lg:mt-0 text-xl font-montserrat absolute right-1">
                +
              </span>
            </div>
            <HorizontalLine className='mt-2' thickness={1} color="#D434FE" />
          </div>
          <div className="my-8 relative">
            <div className="flex items-center gap-3">
              <span className="text-white font-montserrat text-sm">
                Can I work on a project I started before the hackathon?
              </span>
              <span className="text-primary mt-4 lg:mt-0 text-xl font-montserrat absolute right-1">
                +
              </span>
            </div>
            <HorizontalLine className='mt-2' thickness={1} color="#D434FE" />
          </div>
        </div>
        <div className="relative">
          <div className="flex items-end w-72 lg:ml-32 relative animate-bounce">
            <div className="">
              <img src={question} alt="small question mark" />
            </div>
            <div className=" mx-20 ">
              <img src={bigQ} alt="big question mark" />
            </div>
            <div className=" ">
              <img src={question} alt="small question mark" />
            </div>
          </div>
          <img
            src={thinkingMan}
            alt="thinking man on a cloud"
            style={{ width: "700px", height: "auto" }}
            className="w-[50%]"
          />
        </div>
      </div>
    </FifthSection>
  );
}

export default SectionFive;
