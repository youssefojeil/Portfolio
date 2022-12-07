import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (
            <div className='container mt-5 mb-3'>
                <div className='row'>
                    <div className='col'>
                        <span className=''> ©Copyright {new Date().getFullYear()}</span>
                    </div>
                    <div className='col'>
                        <a className="mx-2" href="https://github.com/youssefojeil" target="_blank" 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} beatFade/>
                        </a>        

                        <a className="mx-2" href="https://www.linkedin.com/in/youssefojeil/" target="_blank" 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} beatFade/>
                        </a>          
                        <a className="mx-2" href="https://twitter.com/Gallops_" target="_blank" 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} beatFade/>
                        </a>              
                    </div>
                </div>
            </div>
    )
};

export default Footer