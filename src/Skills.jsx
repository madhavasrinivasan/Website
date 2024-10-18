import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Rectangle } from 'recharts';

const Skills = () => {

  const skillsData = [
    { name: 'HTML/CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 70 },
    { name: 'Git', level: 70 },
    { name: 'Node',level:90}
  ]

  return (
    <div id="skills">
      <div className="text-blue-300 flex text-4xl justify-start m-20">
        <h1><b>SKILLS</b></h1>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={skillsData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" stroke="white"/>
          <YAxis stroke="white"/>
          <Tooltip 
           contentStyle={{ backgroundColor: 'black', borderRadius: '10px', border: '1px solid blue' }}
           itemStyle={{ color: 'white' }}



          />
          <Legend />
          {/* Corrected the dataKey to point to "level" for bar heights */}
          <Bar dataKey="level" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Skills