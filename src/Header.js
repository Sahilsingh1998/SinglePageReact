import React, { useState } from 'react';

function Header() {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '' || !emailRegex.test(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert(`You are subscribed with ${email}`);
        }
    };

    return (
        <>
            <section className="container-fluid" style={{ backgroundColor: "#f1f5fd" }}>
                <div className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column">
                            <h1 className="display-6">Online Payment Made <br /> Easy For You.</h1>
                            <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita alias cum? Vel, veritatis! Fugiat maxime quidem fugit ut cumque quae deleniti.</p>
                            <h5>Get early access for you</h5>
                            <div className='input-group my-3'>
                                <input 
                                    type="text" 
                                    className='rounded-pill p-1 w-75 form-control-text' 
                                    placeholder='Enter Your Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <div className="input-group-button" onClick={handleSubscribe}>
                                    Get it now
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 header-right-side d-flex  main-hero-image">
                            <img src="./image/img-1.jpg" alt='logo' className='img-fluid'></img>
                            <img src="./image/img-2.jpg" alt='logo' className='img-fluid main-hero-image2'></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;
