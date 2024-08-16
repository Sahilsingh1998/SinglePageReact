import { useState } from 'react';
import React from 'react'
import howToUse from './API/HowToUse.js';

function About() {
    const [aboutData] = useState(howToUse);

    return (
        <>
            <section className='common-section our-services'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-6 text-center our-services-left-side-image">
                            <img src="./image/img-2.jpg" alt='logo' className='img-fluid'></img>
                        </div>
                        <div className="col-12 col-lg-5 our-services-list">
                            <h3 className='mini-title'>--AVAILABLE @GOOGLE AND IOS APP STORE ONLY</h3>
                            <h1 className='main-heading'>How to use the app?</h1>
                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-service-number">{id}</div>
                                            <div className="col-10 our-service-data">
                                                <h4>{title}</h4>
                                                <p className='m-0'>{info}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                            <br />
                            <button className='btn-style btn-style-border'>learn more</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='common-section our-services'>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-7 our-services-rightside-content d-flex align-content-start justify-content-center flex-column">
                            <h3 className='mini-title'>--Support in Any langauge</h3>
                            <h3 style={{ fontWeight: 'bolder' }}>World class support is AVAILABLE 24/7</h3>
                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-service-number">{id}</div>
                                            <div className="col-10 our-service-data">
                                                <h4>{title}</h4>
                                                <p className='m-0'>{info}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                            <br />
                            <button className='btn-style btn-style-border'>learn more</button>
                        </div>
                        <div className="col-12 col-lg-5 our-services-right-side-image">
                            <img src="./image/img-2.jpg" alt='logo' className='img-fluid'></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;