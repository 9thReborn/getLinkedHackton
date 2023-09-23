import React from 'react'
import happyGuy from '../../assets/successful-man-3025713-2526911 1.png';
import checker from '../../assets/successfully-done-5108472-4288033 1.png';
import emoji from '../../assets/1531010992wink-emoji-woman-png 1.png'
// import purpleStar from '../../assets/purpleStar.png'
// import pinkStar from '../../assets/pinkStar.png'
// import dimStar from '../../assets/dimStar.png'
import Modal from 'components/Modal/modalComp';
import { useNavigate } from 'react-router-dom';

interface SuccessModelProps {
  isOpen: boolean;
  onClose: () => void;
}

const Success: React.FC<SuccessModelProps> = ({ isOpen, onClose }) => {
  const submitStyle = {
    borderRadius: "4px",
    width: "95%",
    marginTop: "10px",
    background:
      "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
    color: "white",
    padding: "10px 30px",
    border: "none",
    cursor: "pointer",
  };
    
      const navigate = useNavigate();


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 m-auto border border-primary relative rounded-md bg-transparent">
        <div className="flex justify-center ml-10">
          <div className="absolute mr-36" id="left">
            <img src={checker} alt="success" />
          </div>
          <div className="" id="right" style={{ left: "0", zIndex: "1" }}>
            <img src={happyGuy} alt="successfulMan" />
          </div>
        </div>

        <p className="text-white text-base lg:text-3xl font-montserrat text-center">
          Congratulations
        </p>
        <p className="text-white text-base lg:text-3xl font-montserrat mt-2 mb-3 text-center">
          you have successfully Registered!
        </p>

        <span className="block text-white font-montserrat text-center text-xs">
          Yes, it was easy and you did it!
        </span>

        <div className="flex justify-center text-white text-xs font-montserrat ">
          <span className="text-center">check your mail box for next step</span>{" "}
          <img
            src={emoji}
            alt="wink emoji"
            style={{ width: "20px", height: "auto" }}
          />
        </div>
        <div className="flex justify-center my-5">
          <input
            type="submit"
            value={"Back"}
            style={submitStyle}
            onClick={() => navigate("/hackathon/registration")}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Success