import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#01010D] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/bf4c914b-2747-4183-a9d4-cd4c7ecc33a0"  className="flex flex-col max-w-[600px] w-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
          <p className="text-grey-300 py-4 text-gray-300">Submit the form below or shoot me an email - hajorge2012@gmail.com</p>
          <div>
            <input className="bg-[#ccd6f6] p-2 w-full" type="text" placeholder="Name" name="name"/>
            <input className="my-4 p-2 bg-[#ccd6f6] w-full" type="email" placeholder="email" name="email"/>
            <textarea className="bg-[#ccd6f6] p-2 w-full" name="message" rows="10" placeholder="Message"></textarea>
          </div>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Colaborate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
