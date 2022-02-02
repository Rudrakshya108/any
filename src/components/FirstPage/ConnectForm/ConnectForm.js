import React from 'react';
import './ConnectForm.css';

function ConnectForm() {
    return (
        <>
        <div className='connectForm'>
            <div className="letdGetStarted">
            <h1>Let's Get Started</h1>
            <p>
            We offer full-cycle technology solutions that streamline your digital transformation journey. With cuttingedge technical expertise, INT. simplifies complex business challenges with innovative solutions for 100+ fastest growing enterprises.
            </p>

            </div>

            <div className="contactForm">
            <form>
                <input type='text' placeholder='FullName*'/><br/>
                <div className="formLine"></div>
                <input type='email' placeholder='Email*'/><br/>
                <div className="formLine"></div>
                <input type='number' placeholder='Phone Number*'/><br/>
                <div className="formLine"></div>
                <input type='text' placeholder='Company Name*'/><br/>
                <div className="formLine"></div>
                <input type='text' placeholder='Message*'/>
                <div className="formLine"></div>
               
                <button>LET's CONNECT</button>
            </form>
           

            </div>
        </div>
            
        </>
    )
}

export default ConnectForm
