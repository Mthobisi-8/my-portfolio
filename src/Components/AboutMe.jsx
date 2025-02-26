import React from 'react';

const AboutMe = () => {
  return (
    <div
      name="AboutMe"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl font-bold inline border-b-4 border-gray-500
           text-gray-300 text-right italic">
            About : Mthobisi Motimele
          </p>
          <p className="text-base sm:text-lg md:text-xl mt-10 sm:mt-20">
        Mthobisi Motimele is a dedicated and hardworking professional with a strong passion for both personal and technical growth. 
        Outside of work, he enjoys activities such as chess, coding, and soccer. Known for his determination, Mthobisi is committed to achieving his goals and ensuring that no task is left unfinished. 
        He thrives in collaborative environments, actively seeking opportunities to learn from others, whether it's work-related or through personal experiences. 
        Mthobisi is proficient in both front-end and back-end development, with expertise in HTML, Java, Kotlin, and C#. He specializes in creating mobile-responsive and web-based solutions, ensuring optimal performance across platforms.    
        </p>
        <br />
        <p className="text-base sm:text-lg md:text-xl">
          With a degree that fosters a strong problem-solving mindset, I am adept at integrating technology to drive meaningful results, continuously innovate, and adapt to the latest industry trends. 
          My commitment to excellence and passion for technology enable me to deliver high-impact solutions that align with strategic business goals.
        </p>
        </div>
       
      </div>
    </div>
  );
};

export default AboutMe;
