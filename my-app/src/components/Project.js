import React from 'react';
import cryptofolio from '../images/CryptoFolio.png';
import travelbuddy from '../images/TravelBuddy.png';
import lostboy from '../images/lostboy.png';

export default function Project() {
  return (
    <div className='container fluid'>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner rounded shadow-lg">
                <div className="carousel-item active carousel-img">
                    <a href='https://github.com/joseobm92/MVC-cryptofolio' target='_blank' rel="noopener noreferrer"> 
                        <img src={cryptofolio} className="d-block w-100 " alt="..."/>
                    </a>
                    <h3 className='centered-title black-text'> Cryptofolio </h3>
                    <p className='centered-text black-text'> A cryptocurrency portfolio tracker geared towards beginners</p>
                </div>
                <div className="carousel-item carousel-img">
                    <a href='https://joseobm92.github.io/Travel-Buddy/' target='_blank' rel="noopener noreferrer"> 
                        <img src={travelbuddy} className="d-block w-100 " alt="..."/>
                        
                    </a>
                    <h3 className='centered-title'> Travel Buddy </h3>
                    <p className='centered-text'> An app that tracks flight status and weather data, built for travelers</p>
                </div>
                <div className="carousel-item carousel-img">
                    <a href='https://www.lostboy.io/' target='_blank' rel="noopener noreferrer"> 
                        <img src={lostboy} className="d-block w-100 " alt="..."/>
                    </a>
                    <h3 className='centered-title'> LOSTBOY </h3>
                    <p className='centered-text'>A lifestyle brand utilzing music & web3 technology to raise Mental Health Awareness</p>    
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  );
}