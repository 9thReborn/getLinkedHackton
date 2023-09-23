import React, { useState } from 'react'
import { ContactContainer, textAreaStyle, submitStyle } from "./styled";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri"
import { useAuth } from 'context/authContext';
import back from '../../assets/back.png'
import { Link } from 'react-router-dom';

function Contact() {
  
  const [email, setEmail] = useState("")
  const [first_name, setFirstName] = useState("")
  const [message, setMessage] = useState("")

  const { contactConfig } = useAuth()
  
  const formData = {
    email,
    first_name,
    message
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    contactConfig(formData)
  }


  return (
    <ContactContainer className="p-[1.5rem] md:p-[3.5rem] h-screen">
      <div className="lg:flex justify-evenly items-center gap-5">
        <div className="hidden md:block mb-5 ml-10 ">
          <h3 className=" text-3xl text-primary font-ClashDisplay-Semibold w-96 ">
            Get in touch
          </h3>
          <br />
          <div className="text-white font-montserrat">
            <div className="mb-2">
              <p className="block">Contact</p>
              <p>Information</p>
            </div>

            <div className="my-4">
              <span className="block">27,Alara Street</span>
              <span className="block">Yaba 100012</span>
              <span className="block"> Lagos State</span>
            </div>

            <div className="my-4">Call Us : 07067981819</div>

            <div className="mb-2">
              <span className="block">we are open from Monday-Friday</span>
              <span>08:00am - 05:00pm</span>
            </div>

            <p className="text-primary mt-4">Share on</p>
            <div className="flex mt-3 gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com/lastborn_Adin"
                target="_blank"
                rel="noreferrer"
              >
                <RiTwitterXFill />
              </a>
              <a
                href="https://www.facebook.com/silas-adinoyi"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/silas-adinoyi-368360182/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="bg:none md:bg-white md:bg-opacity-5 p-10 rounded-xl shadow-md w-full md:w-2/5 ">
          <div className="block md:hidden ">
            <Link to={"/"}>
              <img src={back} alt="back arrow" className="w-6 h-6 mb-5" />
            </Link>
          </div>
          <p className="text-primary text-xl font-ClashDisplay-Semibold">
            Questions or need assistance?
          </p>
          <span className="text-primary text-xl font-ClashDisplay-Semibold">
            Let us know about it!
          </span>
          <p className="block md:hidden text-white font-montserrat text-xs mt-4">
            Email us below to any question related to our event
          </p>
          <form onSubmit={handleSubmit} className="mt-5 font-montserrat">
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{
                background: "#FFFFFF04",
                color: "#FFF",
                width: "100%",
                height: "40px",
                padding: "0.9em",
                borderRadius: "4px",
                border: "1px solid #FFF",
                fontSize: "16px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                marginBottom: "35px",
                fontFamily: "Montserrat",
              }}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Mail"
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                background: "#FFFFFF04",
                color: "#FFF",
                width: "100%",
                height: "40px",
                padding: "0.9em",
                borderRadius: "4px",
                border: "1px solid #FFF",
                fontSize: "16px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                marginBottom: "35px",
                fontFamily: "Montserrat",
              }}
            />
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Message"
              style={textAreaStyle}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full"
            ></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "24px",
              }}
            >
              <input type="submit" style={submitStyle} />
            </div>
          </form>
          <div className="flex flex-col justify-center items-center">
            <div className=" block lg:hidden text-white mt-2 ">
              <p className="text-primary mt-4 font-xs font-montserrat">
                Share on
              </p>
              <div className="flex mt-3 gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.twitter.com/lastborn_Adin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiTwitterXFill />
                </a>
                <a
                  href="https://www.facebook.com/silas-adinoyi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/in/silas-adinoyi-368360182/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact