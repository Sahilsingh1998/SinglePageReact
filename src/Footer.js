import React from 'react';

function Footer() {
    const handleSubscribe = () => {
        const message = document.getElementById('message').value;
        if (message.trim() !== '') {
            alert('Thank you for susbcribe');
        } else {
            alert('Please enter a message');
        }
    };

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-12 mx-auto">
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    <h4>Web Designer</h4>
                                    <ul className='p-0'>
                                        <p>
                                            Feel Free To Contact Us
                                        </p>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-3">
                                    <h4>Subscribe to get important updates</h4>
                                    <div className="pt-3">
                                    <input id="message" type="text" name="" className="form-control" placeholder="Enter your message" />
                                    </div>
                                    <button className="btn-style my-3" onClick={handleSubscribe}>Subscribe</button>
                                </div>
                                <div className="col-12 col-md-3">
                                    <h4>Call Us</h4>
                                    <ul className='p-0'>
                                        <li>
                                            <a href='/'>+91 7878787878</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12 col-md-3 social-media">
                                    <h4>Follow Us</h4>
                                    <ul>
                                        <li>
                                            <a href='https://www.instagram.com/it_sahil_rajput/?utm_source=qr' target="_blank" rel='noreferrer'>
                                                <i className='fab fa-instagram'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.facebook.com/profile.php?id=100005170176567'  target="_blank" rel='noreferrer'>
                                                <i className='fab fa-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.youtube.com/channel/UC8nEcBalinJGWM4Lqw_ASlA'  target="_blank" rel='noreferrer'>
                                                <i className='fab fa-youtube'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.linkedin.com/feed/'  target="_blank" rel='noreferrer'>
                                                <i className='fab fa-linkedin'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className='main-hero-para text-center'>Copyright@Singh 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
