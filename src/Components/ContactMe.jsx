
const ContactMeHere = () => {

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

          
            <div className="flex justify-between space-x-4">
            
              <button
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300 w-38 md:w-auto"
              >
                Send Message
              </button>
              
           
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMeHere;
