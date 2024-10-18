import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id = "contact">
      <div className = " bg-gray-800 bg-opacity-50 m-16 text-3xl text-blue-500 p-11 rounded-lg border-blue-300 border-2">
        <h1><b>Get In Touch</b></h1>
        <div className="flex items-center mt-10 mr-5">
          <FaEnvelope className="mr-3 text-white" /> 
          <p className="text-white text-lg">madhavasrinivasan44@gmail.com</p>
          </div>
          <div className="flex  items-center mt-5">
          <a href="https://www.linkedin.com/in/madhava-srinivasan-sr-757036322" className="flex items-center">
        <FaLinkedin className="mr-3 text-white" />
        <p className="text-white text-lg">LinkedIn</p></a>
        </div>
        <div className="flex  items-center mt-5">
          <a href="https://github.com/madhavasrinivasan" className="flex items-center">
        <FaGithub className="mr-3 text-white" />
        <p className="text-white text-lg">GitHub</p></a>
        </div> 
        <div className="flex items-center mt-5">
          <FaPhoneSquareAlt className="mr-3 text-white" /> 
          <p className="text-white text-lg">805680490</p>
          </div>
        
      </div>
    </div>
  )
}

export default Contact