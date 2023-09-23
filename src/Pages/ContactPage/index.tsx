import React from 'react'
import Contact from '../../components/Contact'
import Navbar from "components/Navbar";
import useMediaQuery from 'hooks/useMediaQuery';


function RegisterPage() {
  const largeScreen = useMediaQuery("(min-width: 1024px) ");
  return (
    <div>
      {largeScreen && <Navbar />}
      <Contact />
    </div>
  );
}

export default RegisterPage