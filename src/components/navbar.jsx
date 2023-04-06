import React, { useState } from "react";
import Logo from "../assets/Hannah.png";
import {
  Fabars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navi, setNavi] = useState(false);
  const handleClick = () => setNavi(!navi);

  return (
    <div className="z-50 fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#333333] text-[#AD8F18] text 2-xl">
      <a href=".../components/home.jsx">
        <img
          className="rounded-full"
          src={Logo}
          alt="logo"
          style={{ width: "155px" }}
        />
      </a>
      <div>
        <ul className="md:flex">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li>
            <Link to="applications" smooth={true} duration={500}>
              Applications
            </Link>
          </li>

          <li>
            < Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
          {/* build in a field for a resume download */}
          <li>
            <Link to="contact" smooth={true} duration={500}>Resume</Link>
          </li>
        </ul>
      </div>
    </div>

    
  );
};

export default Navbar;
