import React from 'react';
import profilePic from '../../images/portfolio.jpg'

export default function Home() {
  return (
    <div className='container'>
      <div className='row  mt-4'>
          <div className='col-md-5 my-4'>
              <img className='rounded shadow-lg' src={profilePic} alt='profile-pic'>

              </img>
          </div>
          <div className='col-md-7'>
          <h1 className='my-4'>About Me</h1>
            <p className=' p-3 my-4 border-0 rounded shadow-lg'>
              Hello! My name is Youssef Ojeil, I am a Full Stack Developer with a background in Electrical Engineering. I graduated from UCF with a Bachelor in Electrical Engineering in 2016.
              I worked as a Test Engineer for Micross Components from 2017 till 2019 and as a Product Engineer at Honeywell from 2019 till 2021. I quit my job at Honeywell in May of 2021 to pursue my passion,
              this is when I stumbled upon blockchain technology. I had been familiar with cryptocurrencies since 2015 but was never curious enough to dive into and research the technology.
              During my time off work I became drawn into the potential of blockchain technology and decided to focus my efforts in learning more about it, mainly the Ethereum ecosystem. After working
              with countless developers to create websites using web3 technology and smart contracts, I decided it was time for me to learn the basics about web development to then allow myself to learn
              how to develop smart contracts and include web3 packages on web apps.
            </p>
          </div>
          </div>

          <div className='row my-4'>
            <div className='col p-3 m-4 border-0 rounded shadow-lg'>
              <h1 className='my-2 '>Interests</h1>
              <ul className="list-unstyled my-4">
                <li className="list-group-item">Blockchain Technology</li>
                <li className="list-group-item">3D Design</li>
                <li className="list-group-item">AI</li>
                <li className="list-group-item">DeFi</li>
                <li className="list-group-item">Researching new technology</li>
              </ul>
            </div>

          <div className='col p-3 m-4 border-0 rounded shadow-lg'>
            <h1 className='my-2'>Hobbies</h1>
            <ul className="list-unstyled my-4">
                <li className="list-group-item">Sports</li>
                <li className="list-group-item">Gaming</li>
                <li className="list-group-item">Anime</li>
                <li className="list-group-item">Fluent in English Arabic and French</li>
            </ul>

            

          </div>
          </div>

  
    </div>
  );
}
