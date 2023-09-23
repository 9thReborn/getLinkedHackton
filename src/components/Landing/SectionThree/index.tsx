import React from 'react'
import { ThirdSection } from './styled'
import entrepreneur from '../../../assets/entrepreneur.png';

function SectionThree() {
  return (
    <ThirdSection>
      <div className=" flex flex-col lg:flex-row justify-center items-center gap-20">
        <div className=" p-8 lg:p-0 ml-0 lg:ml-10 order-2 lg:order-1">
          <p className="text-white text-center lg:text-left text-xl lg:text-3xl font-ClashDisplay-Bold">
            Rules and
          </p>
          <p className="text-primary text-center lg:text-left text-xl lg:text-3xl font-ClashDisplay-Bold">
            Guidelines
          </p>
          <div className="text-white font-montserrat my-2 text-sm text-center  lg:text-justify leading-7">
            <span className="lg:block">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as
            </span>
            <span className="lg:block">
              clear as day: to shape the future. Whether you're a coding genius,
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
        <div className="order-1 lg:order-2">
          <img src={entrepreneur} alt="entrepreneur" />
        </div>
      </div>
    </ThirdSection>
  );
}

export default SectionThree