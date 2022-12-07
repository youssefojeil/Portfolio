import React from 'react';

export default function Resume() {
  return (
    <div className='container'>
    <h1 className= "row justify-content-center">Resume</h1>
    <h2 className= "row justify-content-center">Full Stack Developer</h2>
    <p className= "row justify-content-center" >2022-Present</p>  
      <div className='row justify-content-center my-2'>
          <div className='col-sm-4 p-3 m-4 border-0 rounded shadow-lg'>
            <h3 className='my-2 row justify-content-center '>Front-End</h3>
            <ul className="list-unstyled my-4 text-center">
              <li className="list-group-item">React</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">Handlebars</li>
              <li className="list-group-item">JQuery</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">Bulma</li>
            </ul>
          </div>

          <div className='col-sm-4 p-3 m-4 border-0 rounded shadow-lg'>
            <h3 className='my-2 row justify-content-center '>Back-End</h3>
            <ul className="list-unstyled my-4 text-center">
              <li className="list-group-item">Node.js</li>
              <li className="list-group-item">Express.js</li>
              <li className="list-group-item">MongoDB & Mongoose</li>
              <li className="list-group-item">MySQL & Sequelize</li>
              <li className="list-group-item">RESTful APIs</li>
              <li className="list-group-item">GraphQL</li>
            </ul>
          </div>
      </div>
      <h2 className= "row justify-content-center">Web3 & Blockchain</h2>
      <p className= "row justify-content-center" >2021-Present</p>
      <div className='row justify-content-center my-2'>
          <div className='col-8 p-3 m-4 border-0 rounded shadow-lg'>
            <h3 className='my-2 row justify-content-center '>CTO</h3>
            <ul className="list-unstyled my-4 text-center">
              <li className="list-group-item">Head of Strategy & Partnerships</li>
              <li className="list-group-item">Product Development Lead</li>
              <li className="list-group-item">Project Management</li>
              <li className="list-group-item">Market & Technology Research</li>
            </ul>
          </div>
      </div>
      <h2 className= "row justify-content-center" >Electrical Engineer</h2>
      <p className= "row justify-content-center" >2017-2021</p>
      <div className='row justify-content-center my-2'>
          <div className='col-sm-4 p-3 m-4 border-0 rounded shadow-lg'>
            <h3 className='my-2 row justify-content-center'>Product Engineer</h3>
            <ul className="list-unstyled my-4 text-center">
              <li className="list-group-item">Product Research & Analysis</li>
              <li className="list-group-item">Product Troubleshooting</li>
              <li className="list-group-item">Failure Analysis</li>
              <li className="list-group-item">Automation of Product Manufacturing Data</li>
              <li className="list-group-item">Data Analysis</li>
            </ul>
          </div>

          <div className='col-sm-4 p-3 m-4 border-0 rounded shadow-lg'>
            <h3 className='my-2 row justify-content-center'>Test Engineer</h3>
            <ul className="list-unstyled my-4 text-center">
              <li className="list-group-item">Schematic Design & Product Requirements</li>
              <li className="list-group-item">Develop Test Plans</li>
              <li className="list-group-item">Manual & Automated Testing</li>
              <li className="list-group-item">Failure Analysis</li>
              <li className="list-group-item">Test Equipment Troubleshooting</li>
            </ul>
          </div>
      </div>


  </div>

  );
}
