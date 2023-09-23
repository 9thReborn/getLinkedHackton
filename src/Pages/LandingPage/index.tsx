import React from "react";
import SectionOne from "components/Landing/SectionOne";
import Navbar from "components/Navbar";
import SectionTwo from "components/Landing/SectionTwo";
import SectionThree from "components/Landing/SectionThree";
import SectionFour from "components/Landing/SectionFour";
import SectionFive from "components/Landing/SectionFive";
import SectionSix from "components/Landing/SectionSix";
import SectionSeven from "components/Landing/SectionSeven";
import SectionEight from "components/Landing/SectionEight";
import SectionNine from "components/Landing/SectionNine";
import Footer from "components/Landing/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <Footer/>
    </div>
  );
}

export default LandingPage;
