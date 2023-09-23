import React, { useState } from "react";
import {
  RegisterContainer,
  gradientTextStyle,
  registerLink,
  selectStyle,
  submitStyle,
} from "./styled";

import Success from "components/Success";
import { Link } from "react-router-dom";
import { useAuth } from "context/authContext";

function Register() {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [team_name, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [group_size, setGroupSize] = useState("");
  const [project_topic, setProjectTopic] = useState("");
  const [category, setCategory] = useState("");
  const [privacy_poclicy_accepted, setPrivacyPoclicyAccepted] = useState("");
  const { registerationConfig } = useAuth();

  const formData = {
    email,
    team_name,
    phone_number,
    project_topic,
    group_size,
    category,
    privacy_poclicy_accepted,
  };
 

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const data = await registerationConfig(formData).then((res:any) => {
      return res
    })
    
    console.log(data)

    if (data.statusText === "Created") {
      handleSuccesButtonClick();
    } else {
      handleCloseModal();
    }
  };

  const handleSuccesButtonClick = () => {
    setSuccessModalOpen(true);

  };
  const handleCloseModal = () => {
    setSuccessModalOpen(false);
  };

  return (
    <RegisterContainer className="p-[1.5rem] md:p-[0.1rem] ">
      <div className=" hidden md:flex justify-evenly items-center p-8">
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
        <Link to="/hackathon/registration">
          <div
            style={registerLink}
            className="transform hover:scale-125 transition-transform duration-300"
          >
            Register
          </div>
        </Link>
      </div>
      <div className=" md:flex justify-center items-center">
        <h3 className="ml-8 md:hidden text-primary text-3xl my-5 font-ClashDisplay-Semibold">
          Register
        </h3>
        <div className=" md:w-1/2">
          <img
            src={require("../../assets/3d-graphic-designer-showing-thumbs-up-png 1.png")}
            alt="office guy"
            // style={{ width: "600px", height: "auto" }}
            className="w-full md:w-[600px] block mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 md:mr-10 lg:mr-28 ">
          <div className="bg-none md:bg-white md:bg-opacity-5 p-10 rounded-xl shadow-md  md:ml-25">
            <h3 className=" hidden md:block text-primary text-3xl my-5 font-ClashDisplay-Semibold">
              Register
            </h3>
            <div className="flex items-center ">
              <span className="text-white text-sm font-montserrat ">
                Be part of this movement!
              </span>
              <div className="flex justify-center mb-0">
                <div className="text-primary mt-0">.....</div>
                <div>
                  <img
                    src={require("../../assets/girl.png")}
                    alt="girl"
                    style={{ width: "20px", height: "auto" }}
                  />
                </div>
                <div className="">
                  <img
                    src={require("../../assets/boy.png")}
                    alt="boy"
                    style={{ width: "20px", height: "auto" }}
                  />
                </div>
              </div>
              <hr />
            </div>
            <h3 className="text-white text-lg lg:text-2xl font-montserrat my-5">
              CREATE YOUR ACCOUNT
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="lg:flex gap-7 my-5">
                <div className=" w-full lg:w-1/2">
                  <label
                    htmlFor="team_name"
                    className="text-white font-montserrat text-sm "
                  >
                    Team's name
                  </label>
                  <input
                    type="text"
                    name="team_name"
                    id="team_name"
                    placeholder="Enter the name of the group"
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                    style={{
                      background: "#FFFFFF04",
                      color: "#FFF",
                      width: "100%",
                      height: "40px",
                      padding: "1em",
                      borderRadius: "4px",
                      border: "1px solid #FFF",
                      fontSize: "11px",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      marginTop: "5px",
                      // marginBottom: "35px",
                      fontFamily: "Montserrat",
                    }}
                  />
                </div>
                <div className=" w-full mt-3 lg:w-1/2 lg:mt-0">
                  <label
                    htmlFor="phone_number"
                    className="text-white font-montserrat text-sm"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Enter your phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    autoComplete="tel"
                    style={{
                      background: "#FFFFFF04",
                      color: "#FFF",
                      width: "100%",
                      height: "40px",
                      padding: "1em",
                      borderRadius: "4px",
                      border: "1px solid #FFF",
                      fontSize: "11px",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      marginTop: "5px",
                      // marginBottom: "35px",
                      fontFamily: "Montserrat",
                    }}
                  />
                </div>
              </div>
              <div className="lg:flex gap-7 my-5">
                <div className=" w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="text-white font-montserrat text-sm "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    style={{
                      background: "#FFFFFF04",
                      color: "#FFF",
                      width: "100%",
                      height: "40px",
                      padding: "1em",
                      borderRadius: "4px",
                      border: "1px solid #FFF",
                      fontSize: "11px",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      marginTop: "5px",

                      fontFamily: "Montserrat",
                    }}
                  />
                </div>
                <div className="w-full mt-3 lg:w-1/2 lg:mt-0">
                  <label
                    htmlFor="project_topic"
                    className="text-white font-montserrat text-sm"
                  >
                    Project Topic
                  </label>
                  <input
                    type="text"
                    name="project_topic"
                    id="project_topic"
                    placeholder="What is your group project topic"
                    onChange={(e) => setProjectTopic(e.target.value)}
                    required
                    style={{
                      background: "#FFFFFF04",
                      color: "#FFF",
                      width: "100%",
                      height: "40px",
                      padding: "1em",
                      borderRadius: "4px",
                      border: "1px solid #FFF",
                      fontSize: "11px",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      marginTop: "5px",

                      fontFamily: "Montserrat",
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-7 my-5">
                <div className="w-full md:w-1/2 md:mt-0">
                  <label
                    htmlFor="category"
                    className="text-white font-montserrat text-sm"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    style={selectStyle}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="px-4 "
                  >
                    <option defaultValue="">Select your category</option>
                    <option value="1">MOBILE</option>
                    <option value="2">WEB</option>
                    <option value="3">BACKEND</option>
                  </select>
                </div>
                <div className=" w-1/2 ">
                  <label
                    htmlFor="group_size"
                    className="text-white font-montserrat text-sm"
                  >
                    Group Size
                  </label>
                  <select
                    name="group_size"
                    id="group_size"
                    style={selectStyle}
                    onChange={(e) => setGroupSize(e.target.value)}
                    required
                    className="px-4 "
                  >
                    <option defaultValue="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <p className="font-montserrat text-xs text-[#FF26B9] my-3 italic">
                Please review your registration details before submitting
              </p>
              <input
                type="checkbox"
                name="privacy_poclicy_accepted"
                id="privacy_poclicy_accepted"
                onChange={(e) => setPrivacyPoclicyAccepted(e.target.value)}
                required
                className="bg-transparent"
              />
              <span className="text-white font-montserrat text-xs">
                {" "}
                I agreed with the event terms and conditions and privacy policy
              </span>
              <br />
              <input
                type="submit"
                value={"Register Now"}
                style={submitStyle}
              />
            </form>
          </div>
        </div>
      </div>
       <Success isOpen={successModalOpen} onClose={handleCloseModal} /> 
    </RegisterContainer>
  );
}

export default Register;
