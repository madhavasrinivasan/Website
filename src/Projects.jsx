import React from 'react'
import { IoIosRocket } from "react-icons/io";

const Projects = () => {
  return (
    <div id = "projects">
    <div className="m-20 text-blue-300 text-4xl font-bold bg-opacity-50">
    <h1>PROJECTS</h1>

    {/* Project grid */}
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 mt-10">
      {["BlogSite", "Airline Reservation System", "MultiPurpose Admin Panel", "Portfolio"].map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 text-white rounded-lg shadow-lg flex items-center justify-center text-2xl bg-opacity-40 border-blue-300 border-2"
        > 
        <div>
          <div className="text-3xl text-blue-700">
            <h2>{project}</h2>
          </div>
          <div className=" text-lg text-white mt-10 justify-around">
            {index === 0 && <p> Built a Complete Backend for my blog site from scartch
              and built a basic react frontend to support it.</p>}
              {index === 1 && <p>Built a simple version of airline reservation system using python amd mysql,where the user book and cancel tickets .  </p>}
              {index === 2 && <p>Desinged and developed the backend for a multipurpose Admin Pannel Whivh Can be reused for many projects.</p>}
              {index === 3 && <p>Built a Persinal Portfilio from scratch using React.js and tailwind css</p>}
          </div>
        </div>
        </div>
      ))}
    </div>
  </div>
  <hr className="w-full h-1 bg-blue-500 opacity-100" />
  </div>
);
};

export default Projects