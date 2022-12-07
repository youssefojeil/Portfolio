import React from 'react';

export default function Contact() {
  return (
    <div className='container'>
      <h1>Contact Me</h1>
      <div className='row'>
      
        <div className="mb-4">
          <label for="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleFormControlName" placeholder="Jon Doe"/>
        </div>  
        <div className="mb-4">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlEmail" placeholder="name@example.com"/>
        </div>
        <div className="mb-4">
          <label for="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlText" rows="7"></textarea>
        </div>
      </div>

    </div>
  );
}
