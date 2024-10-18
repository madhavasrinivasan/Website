import {React,useState} from 'react';
import Myimage from './assets/Myimage.jpg'; 
import Modal from 'react-modal';

Modal.setAppElement('#root');

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resume = "/resume.pdf"
  return (
    <div id = "about">
    <div className=" sm:flex flex-col justify-between items-center  md:flex-row justify-between items-center mt-20 mx-10 p-10 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-blue-300 rounded-lg">

      <div className="mb-10 flex flex-col justify-start w-2/3 ">
        <h1 className="mb-20 text-blue-300 text-5xl font-bold">ABOUT ME</h1>
        <p className="mb-20 text-2xl text-white">
        Full-stack developer with a passion for innovative solutions.
       Delivering end-to-end experiences with precision and care.
          Building bridges between ideas and reality
        </p>
        <div className='mt-10'>
        <button className=" bg-slate-600 text-white border border-blue-400 hover:bg-blue-600 hover:text-blue-200 hover:border-blue-600 transition-all duration-300 ease-in-out py-2 px-4 rounded-lg shadow-lg"
        onClick={() => setIsModalOpen(true)}>
          MY RESUME
        </button>
        </div>
      </div>

      <div className="w-350 h-350 rounded-full overflow-hidden border-4 border-blue-500 ml-10 sm: w-200 h-200 rounded-full overflow-hidden border-4 border-blue-500  ">
        <img src={Myimage} alt="My profile" height={350} width ={350} className="object-cover" />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Resume Modal"
        className="bg-white p-6 rounded-lg max-w-4xl max-h-4xl mx-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl text-blue-600 font-bold mb-4">My Resume</h2>

        {/* Embed Resume */}
        <iframe
          src={resume}
          className="w-full h-96"
          title="Resume"
          frameBorder="0"
        ></iframe>

        {/* Close Button */}
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </Modal>
    </div> 
    <hr className="w-full h-1 bg-blue-500 opacity-100 mt-20" />
    </div>
    
  );
}

export default About;

