import React, { useState } from 'react';
import num1 from '../assets/Images/ThinkFriday/num1.png';
import num2 from '../assets/Images/ThinkFriday/num2.png';
import num3 from '../assets/Images/ThinkFriday/num3.png';
import num4 from '../assets/Images/ThinkFriday/num4.png';
import num5 from '../assets/Images/ThinkFriday/num5.png';
import num6 from '../assets/Images/ThinkFriday/num6.png';
import nuro1 from '../assets/Images/Rose-Cafeteria/nuro1.png';
import nuro2 from '../assets/Images/Rose-Cafeteria/nuro2.png';
import nuro3 from '../assets/Images/Rose-Cafeteria/nuro3.png';
import nuro4 from '../assets/Images/Rose-Cafeteria/nuro4.png';
import nuro5 from '../assets/Images/Rose-Cafeteria/nuro5.png';
import nuro6 from '../assets/Images/Rose-Cafeteria/nuro6.png';
import nuro7 from '../assets/Images/Rose-Cafeteria/nuro7.png';
import nuro8 from '../assets/Images/Rose-Cafeteria/nuro8.png';
import nuro9 from '../assets/Images/Rose-Cafeteria/nuro9.png';
import nuro10 from '../assets/Images/Rose-Cafeteria/nuro10.png';
import firstpg from '../assets/Images/ForgeTalent/first.png';
import firstpg1 from '../assets/Images/ForgeTalent/first1.png';
import firstpg2 from '../assets/Images/ForgeTalent/first2.png';
import firstpg3 from '../assets/Images/ForgeTalent/first3.png';
import firstpg4 from '../assets/Images/ForgeTalent/first4.png';
import firstpg5 from '../assets/Images/ForgeTalent/first5.png';
import firstpg6 from '../assets/Images/ForgeTalent/first6.png';
import firstpg7 from '../assets/Images/ForgeTalent/first7.png';
import firstpg8 from '../assets/Images/ForgeTalent/first8.png';
import firstpg9 from '../assets/Images/ForgeTalent/first9.png';
import firstpg10 from '../assets/Images/ForgeTalent/first10.png';
import firstpg11 from '../assets/Images/ForgeTalent/first11.png';
import firstpg12 from '../assets/Images/ForgeTalent/first12.png';
import firstpg13 from '../assets/Images/ForgeTalent/first13.png';
import firstpg14 from '../assets/Images/ForgeTalent/first14.png';
import firstpg15 from '../assets/Images/ForgeTalent/first15.png';
import firstpg16 from '../assets/Images/ForgeTalent/first16.png';
import firstpg17 from '../assets/Images/ForgeTalent/first17.png';
import firstpg18 from '../assets/Images/ForgeTalent/first18.png';
import firstpg19 from '../assets/Images/ForgeTalent/first19.png';
import firstpg20 from '../assets/Images/ForgeTalent/first20.png';
import firstpg21 from '../assets/Images/ForgeTalent/first21.png';
import firstpg22 from '../assets/Images/ForgeTalent/first22.png';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSlideshow, setShowSlideshow] = useState(false);

  const myprojects = [
    {
      id: 1,
      images: [num1, num2, num3, num4, num5, num6],
      title: 'ThinkFriday',
      message: 'ThinkFriday is a project that was made at ForgeAcademy for Mr Tariq Shurmah company and below is the prototype we had created along side my collegue Nthabiseng Moyaba ,below you can view the project or get the actual code on my Github:https://github.com/Mthobisi-8',
    },
    {
        id: 2,
        images: [nuro1, nuro2,nuro3,nuro4,nuro5,nuro6,nuro7,nuro8,nuro9,nuro10],
        title: 'Rose Cafeteria',
        message: 'Rose cafeteria is a final project for work intergrated learning where we were creating a website for Rosebank College for their cafeteria so learners could learn and order from their smart phones and find their food freshly prepared rather than waiting in long lines to have your delicious food ,below you can view the project or get the actual code on my Github:https://github.com/Mthobisi-8',
      },
      {
        id: 3,
        images: [firstpg,firstpg1, firstpg2,firstpg3,firstpg4,firstpg5,firstpg6,firstpg7,firstpg8,firstpg9,firstpg10,firstpg11,firstpg12,firstpg13,firstpg14,firstpg15,firstpg16,firstpg17,firstpg18,firstpg19,firstpg20,firstpg21,firstpg22],
        title: 'Forge Talent',
        message: 'Forge Talent is an institution that promotes international certificates for young individuals helping them become international recognized.This web page consist of 3D features which i believe would be of you interest .I was tasked with creating a website for their company and below is a link to my github code based on the project: https://github.com/Mthobisi-8/forge-talent-hub-main--2-.git ',
      },
    
  ];

  const handleViewClick = (id) => {
    setSelectedProject(id);
    setCurrentImageIndex(0);
    setShowSlideshow(false);
  };

  const handleStartSlideshow = () => {
    setShowSlideshow(true);
  };

  const handleCloseClick = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setShowSlideshow(false);
  };

  const handleNextClick = () => {
    const project = myprojects.find((project) => project.id === selectedProject);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    const project = myprojects.find((project) => project.id === selectedProject);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // GitHub Button function to redirect to external GitHub link
  const GitHubButton = () => {
    const handleRedirect = () => {
      window.location.href = 'https://github.com/Mthobisi-8';
    };

    return (
      <button
        onClick={handleRedirect}
        className= " mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-950 hover:font-bold text-white rounded"
      >
        GitHub
      </button>
    );
  };

  const selectedProjectData = myprojects.find((project) => project.id === selectedProject);

  return (
    <div name="Projects" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Projects</p>
        <p className="py-6 text-lg">These are the projects I have worked on:</p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12 text-white">
          {myprojects.map(({ id, title, images }) => (
            <div
              key={id}
              className={`shadow-purple-700 shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${selectedProject === id ? 'scale-110' : ''}`}
            >

              <img
                src={images[0]} // Display the first image as thumbnail
                alt={title}
                className="h-30 w-44 mx-auto rounded-xl"
              />
              <p className="mt-4 text-base ">{title}</p>
              {!selectedProject && (
               
                <button onClick={() => handleViewClick(id)} className="px-2 py-1 bg-blue-500 rounded-lg mt-2">
                  View
                </button>
              )}
              
            </div>
          ))}
        </div>

        {selectedProjectData && (
            
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
             
            <div className="relative text-center">
            <button onClick={handleCloseClick} className="absolute  right-4 text-white text-xl bg-red-500 px-4 py-2 rounded-full top-20">
                    X
                  </button>
              {!showSlideshow ? (
                <div className='mt-10'>
                
                  <p className="bg-gradient-to-b from-black via-slate-950 to-black text-white p-4 rounded-lg">
                    {selectedProjectData.message}
                  </p>
                  <button onClick={handleStartSlideshow} className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-950 hover:font-bold text-white rounded">
                    View project
                  </button>
                <div>
                 
                  </div>
                  
                </div>
                
              ) : (
                <div>
                  <img src={selectedProjectData.images[currentImageIndex]} alt="Enlarged" className="w-3/4 h-auto mx-auto mt-16 rounded-2xl" />
                  

                  <button onClick={handlePrevClick} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-2 rounded-full">
                    <IoIosArrowBack />
                  </button>

                  <button onClick={handleNextClick} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-2 rounded-full">
                    <IoIosArrowForward />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
