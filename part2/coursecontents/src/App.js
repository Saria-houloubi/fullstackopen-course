import React from 'react';
import Course from './Course.js';

const App = ({courses}) => {
  return (
    <div>
        {courses.map((course)=>  <Course course={course} />)}
      </div>
  )
}

export default App;
