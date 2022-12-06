import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (
        <footer className="footer social-media-icons" >
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col'>
                        <p> ©Copyright {new Date().getFullYear()}</p>
                    </div>
                    <div className='col'>
                    <a className="foots"href="https://github.com/youssefojeil" target="_blank" 
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                        </a>                         
                    </div>
                    <div className='col'>
                    <a className="foots" href="https://www.linkedin.com/in/youssefojeil/" target="_blank" 
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </div>
                    <div className='col'>
                    <a className="foots" href="https://twitter.com/Gallops_" target="_blank" 
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter}/>
                        </a>                        
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer