import React from 'react'

const Education = () => {
  return (
    <div id ="education">
    <div className  = "flex flex-col bg-gray-800 bg-opacity-50 m-16 text-4xl text-blue-500 p-11 rounded-lg border-blue-300 border-2 sm:text-2xl"><h1><b>EDUCATION & CERTIFICATES</b></h1>
  <div className="mt-10 text-2xl">
    <h2><b>EDUCATION</b></h2>
    <ul className="text-lg text-white mt-5 px-5 "> 
      <li style={{listStyleType:"disc"}}>B.COM IN INFORMATION SYSTEM MANAGEMENT, RKMVC, Chennai (2024)</li>
      <li style={{listStyleType:"disc"}}>GRADE-12, CS Academy, Erode</li>
      <li style={{listStyleType:"disc"}}>GRADE-10, CS Academy, Erode</li>
    </ul>
  </div>
  <div className = "mt-10 text-2xl">
    <h2><b>CERTIFICATIONS</b></h2>
    <ul className="text-lg text-white mt-5 px-5 ">
    <li style={{listStyleType:"disc"}}>PROMPT ENGINEERING (BE-10x)</li>
    <li style={{listStyleType:"disc"}}> BEC VANTAGE (Cambridge English)</li>
    </ul>

  </div>
    </div>
    </div>
  )
}

export default Education 