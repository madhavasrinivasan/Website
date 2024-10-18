import React,{useState} from 'react'
import { Link } from 'react-scroll';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-80 backdrop-blur-md py-4 px-4 md:px-6 lg:px-8 border-b border-blue-800">
    <div>
      <h2 className="text-2xl font-bold text-blue-300">MADHAVA SRINIVASAN</h2>
    </div>

    {/* Burger Icon for Small Screens */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-blue-300 focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          ></path>
        </svg>
      </button>
    </div>

    {/* Navigation Links */}
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } md:flex flex-col md:flex-row space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-6 md:p-0 z-10`}
    >
      <button className="text-blue-300 hover:text-blue-100 hover:bg-blue-800 border-blue-400 rounded-md">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </button>

      <button className="text-blue-300 hover:text-blue-100 hover:bg-blue-800">
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
      </button>

      <button className="text-blue-300 hover:text-blue-100 hover:bg-blue-800">
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </button>

      <button className="text-blue-300 hover:text-blue-100 hover:bg-blue-800">
        <Link to="education" smooth={true} duration={500}>
          Education
        </Link>
      </button>

      <button className="text-blue-300 hover:text-blue-100 hover:bg-blue-800">
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </button>
    </div>
  </header>
  );
};
  

export default Navbar