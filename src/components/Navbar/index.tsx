import React from 'react'
import Button from 'components/Button/Button';
import { MainContainer, gradientTextStyle} from "./styled";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from 'hooks/useMediaQuery';
import MobileMenu from 'components/MobileMenu';


function Navbar() {
 
  const navigate = useNavigate();
  const largeScreen = useMediaQuery("(min-width: 1024px) ");

    return (
      <MainContainer>
        {largeScreen ? (
          <div className=" flex justify-evenly items-center p-8">
            <div className="text-4xl font-ClashDisplay-Bold mr-36 transform hover:scale-125 transition-transform duration-300">
              <Link to={"/"}>
                <h1>
                  <span className="text-white">get</span>
                  <span className="text-primary">linked</span>
                </h1>
              </Link>
            </div>
            <div className=" ">
              <ul className="flex justify-evenly list-none gap-16 ml-64 ">
                <li className="text-white">Timeline</li>
                <li className="text-white">Overview</li>
                <li className="text-white">FAQs</li>
                <li
                  style={gradientTextStyle}
                  className="transform hover:scale-125 transition-transform duration-300"
                >
                  <Link to="/hackathon/contact-form">Contact</Link>
                </li>
              </ul>
            </div>
            <Button
              name={"Register"}
              onClick={() => navigate("/hackathon/registration")}
            />
          </div>
        ) : (
          <MobileMenu />
        )}
      </MainContainer>
    );
}

export default Navbar