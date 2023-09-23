import React from 'react'
import {FourthSection} from './styled'
import teammates from '../../../assets/teammates.png'
import circle from '../../../assets/Ellipse 2.svg'
import Button from 'components/Button/Button'
import { useNavigate } from 'react-router-dom'

function SectionFour() {

  const navigate = useNavigate();

  return (
    <FourthSection>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="relative">
          <div className="hidden lg:block z-0 mb-7">
            <img
              src={circle}
              alt="background"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                marginLeft: "90px",
              }}
            />
          </div>
          <div className="relative">
            <img
              src={teammates}
              alt="works at site"
              style={{ width: "710px", height: "auto", zIndex: 2 }}
            />
          </div>
        </div>
        <div className="mr-10">
          <p className="text-white text-center lg:text-left text-xl lg:text-3xl font-ClashDisplay-Bold">
            Judging Criteria
          </p>
          <p className="text-primary text-center lg:text-left text-xl lg:text-3xl font-ClashDisplay-Bold">
            Key attributes
          </p>
          <div className="text-white font-montserrat my-4 text-xs lg:text-sm text-center lg:text-left leading-7">
            <span className="lg:block">
              <span className="text-[#FF26B9] text-sm lg:text-base font-bold">
                Innovation and Creativity
              </span>
              : Evaluate the uniqueness and creativity of the
            </span>
            <span className="lg:block">
              solution. Consider whether it addresses a real-world problem in a
              novel
            </span>
            <span className="lg:block">
              way or introduces innovative features.
            </span>
          </div>
          <div className="text-white font-montserrat my-4 text-xs lg:text-sm text-center lg:text-left leading-7">
            <span className="lg:block">
              <span className="text-[#FF26B9] text-sm lg:text-base font-bold">
                Functionality:
              </span>
              Assess how well the solution works. Does it perform its
            </span>
            <span className="lg:block">
              intended functions effectively and without major issues? Judges
              would
            </span>
            <span className="lg:block">
              consider the completeness and robustness of the solution.
            </span>
          </div>
          <div className="text-white font-montserrat my-4 text-xs lg:text-sm text-center lg:text-left leading-7">
            <span className="lg:block">
              <span className="text-[#FF26B9] text-sm lg:text-base font-bold">
                Impact and Relevance:
              </span>
              Determine the potential impact of the solution
            </span>
            <span className="lg:block">
              in the real world. Does it address a significant problem, and is
              it relevant
            </span>
            <span className="lg:block">
              to the target audience? Judges would assess the potential social,
            </span>
            <span className="lg:block">
              economic, or environmental benefits.{" "}
            </span>
          </div>
          <div className="text-white font-montserrat my-4 text-xs lg:text-sm text-center lg:text-left leading-7">
            <span className="lg:block">
              <span className="text-[#FF26B9] text-sm lg:text-base font-bold">
                Technical Complexity:
              </span>
              Evaluate the technical sophistication of the solution.
            </span>
            <span className="lg:block">
              Judges would consider the complexity of the code, the use of
              advanced
            </span>
            <span className="lg:block">
              technologies or algorithms, and the scalability of the solution.
            </span>
          </div>
          <div className="text-white font-montserrat mt-4 mb-10 text-xs lg:text-sm text-center lg:text-left leading-7">
            <span className="lg:block">
              <span className="text-[#FF26B9] text-sm lg:text-base font-bold">
                Adherence to Hackathon Rules:{" "}
              </span>
              Judges will Ensure that the team adhered
            </span>
            <span className="lg:block">
              to the rules and guidelines of the hackathon, including deadlines,
              use of
            </span>
            <span className="lg:block">
              specific technologies or APIs, and any other competition-specific
              requirements.
            </span>
          </div>
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
        </div>
      </div>
    </FourthSection>
  );
}

export default SectionFour