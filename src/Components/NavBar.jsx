import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import HeroImage from "../assets/Images/MeBackground.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'AboutMe' },
    { id: 3, link: 'Skills' },
    { id: 4, link: 'Projects' },
    { id: 5, link: 'ContactMe' },
  ];

  return (
   
    <div className="flex justify-between items-center w-full h-15 px-4 text-white bg-black fixed  z-20 backdrop-blur-lg shadow-md shadow-purple-700">
       
      <div>
        <img
                    src={HeroImage}
                    alt="my profile"
                    className=" lg:w-25  hidden md:flex md:w-30  ml-0 "
                  />
      </div>

      <ul className="hidden md:flex backdrop-blur-sm z-20">
        {
          links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:bold hover:text-white hover:scale-105 duration-200 backdrop-blur-sm z-50">
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))
        }
      </ul>

      <div
        onClick={() => setNav(!nav)} className="cursor-pointer pr-4 text-gray-500 md:hidden backdrop-blur-sm z-20">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 py-4 w-96 h-screen bg-gradient-to-b from-black via-gray-800 to-black text-gray-500 rounded-lg mt-12 backdrop-blur-sm">
           <img
                    src={HeroImage}
                    alt="my profile"
                    className=" w-30 h-10 sm:w-50 sm:h-60 md:w-30  ml-0 "
                  />
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl backdrop-blur-sm z-20">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
     
    </div>
  );
};

export default NavBar;