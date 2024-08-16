import React from 'react'
import serviceapi from './API/serviceapi';
import { useState } from 'react';

function Service() {
    const [SreviceData] = useState(serviceapi);
    return (
        <>
            <section className='service-main-container container'>
                <div className="service-container container my-5">
                    <h2 className='text-center fw-bold'>
                        How To Send Money
                    </h2>
                    <div className="row gap-3 my-5">
                        {SreviceData.map((curElem) => {
                            const { id, logo, title, info } = curElem;
                            return (
                                <>
                                    <div className="col-12 col-lg-4 work-container-subdivs" key={id}>
                                        <i class={`fontawesome-style ${logo}`}></i>
                                        <h5>{title}</h5>
                                        <p className='main-hero-para w-100'>{info}</p>
                                    </div>

                                </>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
