import React from 'react';
import App from "../assets/Images/Whatsapp.png";

const ContactMeHere = () => {
  const phoneNumber = "0849821089";  

  return (
    <div
      name="ContactMe"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-gray-300 italic">
            Contact: Mthobisi Motimele
          </p>
          <p className="py-4 sm:py-6">
            Looking forward to hearing from you
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/broyyxoa"
            method="POST"
            className="flex flex-col w-full sm:w-3/4 md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name:"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email:"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message:"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            {/* Buttons placed side by side */}
            <div className="flex justify-between space-x-4">
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300 w-full md:w-auto">
                Send Message
              </button>
              
              {/* WhatsApp button */}
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-500 px-6 py-3 my-8 flex items-center rounded-md hover:bg-green-600 duration-300 w-full md:w-auto"
              >
                <img
                  src={App}
                  alt="WhatsApp"
                  className=" mx-auto w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
                  </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMeHere;
