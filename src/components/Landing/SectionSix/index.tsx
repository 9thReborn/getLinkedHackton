import React from 'react'
import { SixthSection } from './styled'
import VerticalLine from 'components/StraightLine/veritcalLine';
import image1 from '../../../assets/No 1.png'
import image2 from '../../../assets/No 2.png'
import image3 from '../../../assets/No 3.png'
import image4 from '../../../assets/No 4.png'
import image5 from '../../../assets/No 5.png'
import image6 from '../../../assets/No 6.png'

function SectionSix() {
  return (
    <SixthSection>
      <div className="flex justify-center">
        <h2 className="text-3xl font-ClashDisplay-Bold text-white">Timeline</h2>
      </div>
      <div className="text-center text-white font-montserrat text-sm mt-2">
        <span className="lg:block">
          Here is the breakdown of the time we anticipate
        </span>{" "}
        using for the upcoming event.
      </div>
      {/** ================ for mobile ================ */}
      <div className="block lg:hidden  mt-12">
        <div className="flex gap-4 mb-5">
          <div className="flex flex-col items-center ml-2">
            <VerticalLine height={88} thickness={3} color="#D434FE" />
            <img src={image1} alt="one" className="w-11 h-6 mt-1" />
          </div>
          <div>
            <p className="text-xs font-bold font-montserrat text-primary mb-1">
              Hackathon Announcement
            </p>
            <span className="text-white font-montserrat text-xs ">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </span>
            <p className="text-xs font-bold font-montserrat text-primary mt-2">
              November 18, 2023
            </p>
          </div>
        </div>
        <div className="flex gap-4 mb-5">
          <div className="flex flex-col items-center ml-2">
            <VerticalLine height={88} thickness={3} color="#D434FE" />
            <img src={image2} alt="two" className="w-11 h-6 mt-1" />
          </div>
          <div>
            <p className="text-xs font-bold font-montserrat text-primary mb-1">
              Teams Registration begins
            </p>
            <span className="text-white font-montserrat text-xs ">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </span>
            <p className="text-xs font-bold font-montserrat text-primary mt-2">
              November 18, 2023
            </p>
          </div>
        </div>
        <div className="flex gap-4 mb-5 ">
          <div className="flex flex-col items-center ml-2">
            <VerticalLine height={88} thickness={3} color="#D434FE" />
            <img src={image3} alt="three" className="w-5 h-6 mt-1" />
          </div>
          <div>
            <p className="text-xs font-bold font-montserrat text-primary mb-1">
              Teams Registration ends
            </p>
            <span className="text-white font-montserrat text-xs ">
              Interested Participants are no longer Allowed to register
            </span>
            <p className="text-xs font-bold font-montserrat text-primary mt-5">
              November 18, 2023
            </p>
          </div>
        </div>
        <div className="flex gap-4 mb-5">
          <div className="flex flex-col items-center ml-2">
            <VerticalLine height={99} thickness={3} color="#D434FE" />
            <img src={image4} alt="four" className="w-11 h-6 mt-1" />
          </div>
          <div>
            <p className="text-xs font-bold font-montserrat text-primary mb-1">
              Announcement of the accepted teams and ideas
            </p>
            <span className="text-white font-montserrat text-xs  ">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </span>
            <p className="text-xs font-bold font-montserrat text-primary mt-2">
              November 18, 2023
            </p>
          </div>
        </div>
        <div className="flex gap-4 mb-5">
          <div className="flex flex-col items-center ml-2">
            <VerticalLine height={88} thickness={3} color="#D434FE" />
            <img src={image5} alt="five" className="w-11 h-6 mt-1" />
          </div>
          <div>
            <p className="text-xs font-bold font-montserrat text-primary mb-1">
              Getlinked Hackathon 1.0 Offically Begins
            </p>
            <span className="text-white font-montserrat text-xs ">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </span>
            <p className="text-xs font-bold font-montserrat text-primary mt-7">
              November 18, 2023
            </p>
          </div>
        </div>
        <div className="flex gap-4 mb-5">
          <div className="flex flex-col items-center mt-2 ml-2">
            <VerticalLine height={100} thickness={3} color="#D434FE" />
            <img src={image6} alt="six" className="w-11 h-6 mt-1" />
          </div>
          <div>
            <p className="text-xs font-bold font-montserrat text-primary mb-1">
              Demo Day
            </p>
            <span className="text-white font-montserrat text-xs ">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </span>
            <p className="text-xs font-bold font-montserrat text-primary mt-2">
              November 18, 2023
            </p>
          </div>
        </div>
      </div>

      {/** ==============for desktop================= */}
      <div className="hidden lg:flex justify-around mt-24">
        <div className=" my-5 p-5 text-right">
          <div className=" mt-5 mb-16" id="left">
            <p className="font-montserrat text-2xl text-primary font-bold mb-3">
              Hackathon Announcement
            </p>
            <span className="text-white font-montserrat text-sm block">
              The getlinked tech hackathon 1.0 is formally announced
            </span>
            <span className="text-white font-montserrat text-sm">
              to the general public and teams begin to get ready to register
            </span>
          </div>
          <div className=" mb-16">
            <p className="font-montserrat text-2xl text-primary font-bold">
              November 18, 2023
            </p>
          </div>
          <div className=" mt-5 mb-16" id="left">
            <p className="font-montserrat text-2xl text-primary font-bold mb-3">
              Teams Registration ends
            </p>
            <span className="text-white font-montserrat text-sm block">
              Interested Participants are no longer Allowed to
            </span>
            <span className="text-white font-montserrat text-sm">register</span>
          </div>
          <div className=" mb-16">
            <p className="font-montserrat text-2xl text-primary font-bold">
              November 18, 2023
            </p>
          </div>
          <div className=" mt-5 mb-16" id="left">
            <p className="font-montserrat text-2xl text-primary font-bold mb-8">
              Getlinked Hackathon 1.0 Offically Begins
            </p>
            <span className="text-white font-montserrat text-sm block">
              Accepted teams can now proceed to build their
            </span>
            <span className="text-white font-montserrat text-sm">
              ground breaking skill driven solutions
            </span>
          </div>
          <div className=" mt-5 mb-16">
            <p className="font-montserrat text-2xl text-primary font-bold">
              November 18, 2023
            </p>
          </div>
        </div>
        {/** end of right side of container */}

        <div className="w-10">
          <div className="flex justify-center">
            <VerticalLine height={70} thickness={5} color="#D434FE" />
          </div>
          <div className="my-2">
            <img src={image1} alt="one" />
          </div>
          <div className="flex justify-center">
            <VerticalLine height={77} thickness={5} color="#D434FE" />
          </div>
          <div className="my-2">
            <img src={image2} alt="two" />
          </div>
          <div className="flex justify-center">
            <VerticalLine height={77} thickness={5} color="#D434FE" />
          </div>
          <div className="my-2">
            <img src={image3} alt="three" />
          </div>
          <div className="flex justify-center">
            <VerticalLine height={77} thickness={5} color="#D434FE" />
          </div>
          <div className="my-2">
            <img src={image4} alt="four" />
          </div>
          <div className="flex justify-center">
            <VerticalLine height={77} thickness={5} color="#D434FE" />
          </div>
          <div className="my-2">
            <img src={image5} alt="five" />
          </div>
          <div className="flex justify-center">
            <VerticalLine height={70} thickness={5} color="#D434FE" />
          </div>
          <div className="my-2">
            <img src={image6} alt="six" />
          </div>
        </div>

        {/** start of left side of container */}
        <div className=" my-5 p-5 text-left">
          <div className=" mt-8">
            <div className=" mb-20">
              <p className="font-montserrat text-2xl text-primary font-bold">
                November 18, 2023
              </p>
            </div>
            <div className=" mt-8 mb-16" id="left">
              <p className="font-montserrat text-2xl text-primary font-bold mb-3">
                Teams Registration begins
              </p>
              <span className="text-white font-montserrat text-sm block">
                Interested teams can now show their interest in the
              </span>
              <span className="text-white font-montserrat text-sm">
                getlinked tech hackathon 1.0 2023 by proceeding to register
              </span>
            </div>
            <div className=" mb-16">
              <p className="font-montserrat text-2xl text-primary font-bold">
                November 18, 2023
              </p>
            </div>
            <div className=" mt-5 mb-16" id="left">
              <p className="font-montserrat text-2xl text-primary font-bold mb-3">
                Announcement of the accepted teams{" "}
                <span className="block">and ideas</span>
              </p>
              <span className="text-white font-montserrat text-sm block">
                All teams whom idea has been accepted into getlinked tech
              </span>
              <span className="text-white font-montserrat text-sm">
                hackathon 1.0 2023 are formally announced
              </span>
            </div>
            <div className=" mb-16">
              <p className="font-montserrat text-2xl text-primary font-bold">
                November 18, 2023
              </p>
            </div>
            <div className=" mt-5" id="left">
              <p className="font-montserrat text-2xl text-primary font-bold mb-3">
                Demo Day
              </p>
              <span className="text-white font-montserrat text-sm block">
                Teams get the opportunity to pitch their projects to judges.
              </span>
              <span className="text-white font-montserrat text-sm">
                The winner of the hackathon will also be announced on
              </span>
              <span className="text-white font-montserrat text-sm block">
                this day
              </span>
            </div>
          </div>
        </div>
      </div>
    </SixthSection>
  );
}

export default SectionSix