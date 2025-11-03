import { useState, useEffect } from "react";
import html from "../assets/Images/html.png";
import Java from "../assets/Images/javaa.png";
import SQL from "../assets/Images/SQL.jpeg";
import Ora from "../assets/Images/Oracle.png";
import CSharp from "../assets/Images/Cshhh.jpg";
import JavaScript from "../assets/Images/javascript.png";
import REactimage from "../assets/Images/react.png";
import Firebase from "../assets/Images/firebase.png";
import Kot from "../assets/Images/Kotlin.png";

const Knowledge = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: JavaScript, title: "JavaScript", style: "shadow-yellow-400" },
    { id: 3, src: REactimage, title: "React.js", style: "shadow-blue-600" },
    { id: 4, src: Kot, title: "Kotlin", style: "shadow-purple-400" },
    { id: 5, src: Java, title: "Java", style: "shadow-red-400" },
    { id: 6, src: CSharp, title: "C#", style: "shadow-gray-400" },
    { id: 7, src: Firebase, title: "Firebase", style: "shadow-amber-400" },
    { id: 8, src: SQL, title: "MySQL", style: "shadow-gray-400" },
    { id: 9, src: Ora, title: "Oracle", style: "shadow-green-300" },
  ];

  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const quantity = techs.length;
  const radius = 250; // distance from center
  const perspective = 1000;
  const rotateX = -15; // tilt

  // Continuous rotation logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => setRotation((prev) => prev + 0.5), 30);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen py-12 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="text-center mb-8">
        <p className="text-4xl font-bold border-b-4 border-gray-500 inline text-white p-2">
          Skills
        </p>
        <p className="py-4 text-lg text-white">
          These are my Programming Languages
        </p>
      </div>

      {/* 3D Rotating Wrapper */}
      <div
        className="relative flex items-center justify-center w-[400px] h-[400px]"
        style={{
          perspective: `${perspective}px`,
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Rotating Container */}
        <div
          className="absolute transition-transform duration-700 ease-linear"
          style={{
            transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
            width: "120px",
            height: "150px",
          }}
        >
          {techs.map((tech, index) => {
            const angle = (360 / quantity) * index;
            return (
              <div
                key={tech.id}
                className={`absolute inset-0 rounded-xl bg-gray-900 ${tech.style} flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg`}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <img
                  src={tech.src}
                  alt={tech.title}
                  className="w-20 h-20 object-contain"
                />
                <p className="mt-2 text-white font-semibold">{tech.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
