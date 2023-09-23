import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import options from '../../assets/options.png'
import close from '../../assets/close.png'
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {FaRegWindowClose} from 'react-icons/fa'



const MobileMenu = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
      setOpen((prev) => !prev);
    }
    return (
      <div>
        {open && (
          <div className="flex justify-between ">
            <div className="bg-wallpaper h-64b w-64 p-10">
              <span className="text-white my-5 block">Timeline</span>
              <span className="text-white my-5 block">Overview</span>
              <span className="text-white my-5 block">FAQs</span>
              <span className="text-white my-5 block">
                {" "}
                <Link to="/hackathon/contact-form">Contact</Link>
              </span>
              <Button
                name={"Register"}
                onClick={() => navigate("/hackathon/registration")}
              />
            </div>
            <div className="p-10">
              <FaRegWindowClose className="text-white" onClick={toggleOpen} />
            </div>
          </div>
        )}
        {!open && (
          <div className="flex justify-between items-center p-5">
            <div className="text-2xl font-ClashDisplay-Bold ">
              <Link to={"/"}>
                <h1>
                  <span className="text-white">get</span>
                  <span className="text-primary">linked</span>
                </h1>
              </Link>
            </div>
            {open ? (
              <img
                src={close}
                alt="close"
                className="w-5 h-4"
                onClick={toggleOpen}
              />
            ) : (
              <img
                src={options}
                alt="options"
                className="w-5 h-4"
                onClick={toggleOpen}
              />
            )}
          </div>
        )}
      </div>
    );
}

export default MobileMenu