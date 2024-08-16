import React, { useState } from 'react';
import workapi from './API/WorksApi.js';

function Howitworks() {

    const [workData] = useState(workapi);

    return (
        <>
            <section>
                <div className="work-container container">
                    <h2 className='main-heading text-center'>How Does It Works</h2>
                    <div className="row">
                        {workData.map((curElem) => {
                            const {logo, title, info} = curElem;
                            return (
                                <>
                                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                        <div className="box">
                                       <i class={`fontawesome-style ${logo}`}></i>
                                        <h5>{title}</h5>
                                        <p className='main-hero-para w-100'>{info}</p>
                                        </div>
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

export default Howitworks;