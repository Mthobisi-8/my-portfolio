
import HeroImage from "../assets/Images/Welcome.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-500"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-300 text-center md:text-left mt-12" >
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-center md:text-center">
          I am a dedicated and passionate Software Developer with a strong commitment to continuous learning and growth within the Information Systems domain.
           I take pride in delivering high-quality, efficient code that exceeds client expectations, ensuring optimal performance and user satisfaction at every stage of development.  </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="Projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
             
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className=" md:mt-0 hover:shadow-purple-600 "> 
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-3/4 sm:w-1/2 md:w-full hover:shadow-purple-600 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
