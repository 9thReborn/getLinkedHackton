import React from 'react'
import {SecondSection} from './styled'
import bigIdea from '../../../assets/the big idea 1.png'
import arrow from '../../../assets/arrow.png'

function SectionTwo() {
  return (
    <SecondSection>
      <div className="lg:flex justify-center items-center gap-20 relative">
        <div className="relative">
          <span className="text-white font-montserrat text-lg lg:text-2xl absolute top-1/2 transform -translate-y-1/2 -left-7 lg:left-0 text-center w-1/2 z-10 ml-28 mt-5 font-bold">
            The Big <span className="block">Idea</span>
          </span>

          <div className="flex gap-10 relative" id="image">
            <img src={bigIdea} alt="the big idea" />
            <div>
              <img
                src={arrow}
                alt="curly arrow"
                style={{ position: "absolute", bottom: 0, right: 0 }}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 text-center lg:text-left">
          <p className="text-white text-xl lg:text-3xl font-ClashDisplay-Bold">
            Introduction to getlinked
          </p>
          <p className="text-primary text-xl lg:text-3xl font-ClashDisplay-Bold">
            tech Hackathon 1.0
          </p>
          <div className="text-white font-montserrat my-2 text-sm lg:text-justify lg:leading-7">
            <span className="lg:block">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as
            </span>
            <span className="lg:block">
              clear as day to shape the future. Whether you're a coding genius,
              a
            </span>
            <span className="lg:block">
              design maverick, or a concept wizard, you'll have the chance to
              transform
            </span>
            <span className="lg:block">
              your ideas into reality. Solving real-world problems, pushing the
              boundaries
            </span>
            <span className="lg:block">
              of technology, and creating solutions that can change the world,
            </span>
            <span className="lg:block">that's what we're all about!</span>
          </div>
        </div>
      </div>
    </SecondSection>
  );
}

export default SectionTwo

