import React from 'react';
import html from '../assets/Images/html.png';
import Java from '../assets/Images/Javaa.png';
import SQL from '../assets/Images/SQL.jpeg';
import Ora from '../assets/Images/Oracle.png';
import CSharp from '../assets/Images/Cshhh.jpg';
import JavaScript from '../assets/Images/javascript.png';
import REactimage from '../assets/Images/react.png';
import Firebase from '../assets/Images/firebase.png';
import Kot from'../assets/Images/Kotlin.png';

const Knowledge = () => {
  const techs = [
    { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: JavaScript, title: 'JavaScript', style: 'shadow-yellow-400' },
    { id: 3, src: REactimage, title: 'React.js', style: 'shadow-blue-600' },
    { id: 4, src: Kot, title: 'Kotlin', style: 'shadow-purple-400' },
    { id: 5, src: Java, title: 'Java', style: 'shadow-red-400' },
    { id: 6, src: CSharp, title: 'C#', style: 'shadow-gray-400' },
    { id: 7, src: Firebase, title: 'Firebase', style: 'shadow-amber-400' },
    { id: 8, src: SQL, title: 'MySQL', style: 'shadow-gray-400' },
    { id: 9, src: Ora, title: 'Oracle', style: 'shadow-green-300' },
  ];

  return (
    <div name="Skills" className="bg-gradient-to-b from-black to-gray-800 w-full h-full py-8">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
        <p className="py-6 text-lg">These are my Programming Languages</p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12 text-white">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
          >
            <img src={src} alt={title} className="w-20 mx-auto" />
            <p className="mt-4 text-base">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
