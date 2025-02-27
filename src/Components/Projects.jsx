import React, { useState } from 'react';
import num1 from '../assets/Images/ThinkFriday/num1.png';
import num2 from '../assets/Images/ThinkFriday/num2.png';
import num3 from '../assets/Images/ThinkFriday/num3.png';
import num4 from '../assets/Images/ThinkFriday/num4.png';
import num5 from '../assets/Images/ThinkFriday/num5.png';
import num6 from '../assets/Images/ThinkFriday/num6.png';
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
      message: 'ThinkFriday is a project that was made at ForgeAcademy for Mr Tariq Shurmah company and below is the prototype we had created along side my collegue Nthabiseng Moyaba ,below you can view the project or get the actual code on my Github:',
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
      window.location.href = 'https://github.com/Mthobisi-8/ForgeFinalWeb';
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
        <p className="py-6 text-lg">These are the projects I have worked on</p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12 text-white">
          {myprojects.map(({ id, title, images }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${selectedProject === id ? 'scale-110' : ''}`}
            >

              <img
                src={images[0]} // Display the first image as thumbnail
                alt={title}
                className="w-44 mx-auto"
              />
              <p className="mt-4 text-base">{title}</p>
              {!selectedProject && (
               
                <button onClick={() => handleViewClick(id)} className="px-2 py-1 bg-blue-500 rounded">
                  View
                </button>
              )}
              
            </div>
          ))}
        </div>

        {selectedProjectData && (
            
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
              <button onClick={handleCloseClick} className="absolute top-4 right-4 text-white text-xl bg-red-500 px-4 py-2 rounded-full">
                    X
                  </button>
            <div className="relative text-center">
            <button onClick={handleCloseClick} className="absolute  right-4 text-white text-xl bg-red-500 px-4 py-2 rounded-full top-0">
                    X
                  </button>
              {!showSlideshow ? (
                <div className='mt-10'>
                
                  <p className="bg-gradient-to-b from-black via-slate-950 to-black text-white p-4 rounded-lg">
                    {selectedProjectData.message}
                  </p>
                  <button onClick={handleStartSlideshow} className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-950 hover:font-bold text-white rounded">
                    View project
                  </button>
                <div>
                  <GitHubButton /> 
                  </div>
                  
                </div>
                
              ) : (
                <div>
                  <img src={selectedProjectData.images[currentImageIndex]} alt="Enlarged" className="w-3/4 h-auto mx-auto" />
                  <button onClick={handleCloseClick} className="absolute top-4 right-4 text-white text-xl bg-red-500 px-4 py-2 rounded-full">
                    X
                  </button>

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
