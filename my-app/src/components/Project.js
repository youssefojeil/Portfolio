import React from 'react';
import cryptofolio from '../images/CryptoFolio.png';
import travelbuddy from '../images/TravelBuddy.png';
import lostboy from '../images/lostboy.png';

export default function Project() {
  return (
    <div className='container'>
        <div className='row my-2'>
            <div className='col'>
                <a href='https://radiant-lowlands-48817.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                    <div class="card text-bg-dark">
                        <img src={cryptofolio} className="card-img custom-opacity" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Cryptofolio</h5>
                            <p class="card-text">A cryptocurrency portfolio tracker geared towards beginners</p>
                        </div>
                    </div>
                </a>
            </div>  
        </div>
        <div className='row my-2'>
            <div className='col-md-6'>
                <a href='https://joseobm92.github.io/Travel-Buddy/' target='_blank' rel="noopener noreferrer">
                    <div class="card text-bg-dark">
                        <img src={travelbuddy} className="card-img custom-opacity custom-height" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Travel Buddy</h5>
                            <p class="card-text">The perfect Flight and Weather tracking tool built for travelers</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-md-6 my-2'>
                <a href='https://www.lostboy.io/' target='_blank' rel="noopener noreferrer">
                    <div class="card text-bg-dark">
                        <img src={lostboy} className="card-img custom-opacity custom-height" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title mt-4">LOSTBOY</h5>
                            <p class="card-text">A lifestyle brand using web3 technology and music to raise Mental Health Awareness</p>

                        </div>
                    </div>
                </a>
            </div>    
        </div>
    </div>
  );
}