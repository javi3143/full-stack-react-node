import React from 'react'

const getSum = (total, num) => {
  return total + num
}

const PrintCourse = ({course}) => {
  return (
    <div>
    <h1>{course.name}</h1>
    <ul>
    {course.parts.map(part =>
      <li key={part.id}>{part.name}</li>
    )}
    <li><strong>total of {course.parts.map(part => part.exercises).reduce(getSum, 0)} exercises</strong></li>
    </ul>
    </div>
  )
}

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => 
        <PrintCourse course= {course}/>)}
    </div>
  )
}

export default Course