import React, {useState} from "react";
import Logo from "../assets/Hannah.png";



const Navbar = () => {
    const [navi, setNavi] = useState (false);
    const handleClick = () => setNavi (!navi);


    return (
        <div className="z-50 fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#333333] text-[#AD8F18] text 2-xl">
            <a href=".../components/home.jsx">
                <img className="rounded-full"
                src={Logo} alt="logo" style={{ width: "155px" }} />
            </a>
        </div>

        // nav bar link top of page
    )
};




export default Navbar;