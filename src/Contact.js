import React, { useState } from 'react'

function Contact() {

    const [UserData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",

    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...UserData, [name]: value })
    };

    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message } = UserData;
        if (firstName && lastName && phone && email && address && message) {
            const res = await fetch(
                'https://reactfirebase-1aa39-default-rtdb.firebaseio.com/userDataRecord.json',

                {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message,
                    })
                }
            );

            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",

                });
                alert("Data Store");
            }
            else {
                alert("Please fill the data");
            }
        }
        else {
            alert("Please fill the data");
        }
    };

    return (
        <>
            <section className='contactus-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-us-leftside col-12 col-md-5">
                                    <h3 className='main-heading fw-bold'>
                                        Contact with our sales team
                                    </h3>
                                    <p className='main-hero-para'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, error.
                                    </p>
                                    <figure>
                                        <img src="./image/img-2.jpg" alt='logo' className='img-fluid'></img>
                                    </figure>
                                </div>
                                <div className="col-12 col-md-7 contact-us-rightside">
                                    <form method='POST'>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-md-6 contact-input-field">
                                                    <input type="text" name="firstName" id="" className='form-control' placeholder='First Name' value={UserData.firstName} onChange={postUserData} />
                                                </div>
                                                <div className="col-12 col-md-6 contact-input-field">
                                                    <input type="text" name="lastName" id="" className='form-control' placeholder='Last Name' value={UserData.lastName} onChange={postUserData} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 contact-input-field">
                                                    <input type="text" name="phone" id="" className='form-control' placeholder='Phone Number' value={UserData.phone} onChange={postUserData} />
                                                </div>
                                                <div className="col-12 col-md-6 contact-input-field">
                                                    <input type="text" name="email" id="" className='form-control' placeholder='Email Id' value={UserData.email} onChange={postUserData} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 contact-input-field">
                                                    <input type="text" name="address" id="" className='form-control' placeholder='Add Address' value={UserData.address} onChange={postUserData} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 contact-input-field">
                                                    <input type="text" name="message" id="" className='form-control' placeholder='Enter your message' value={UserData.message} onChange={postUserData} />
                                                </div>
                                            </div>
                                            <div class="form-check form-checkbox-style">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" className='main-hero-para'>
                                                    I agree that the website may contact me at the email address or phone number above.
                                                </label>
                                                <button className='btn btn-style w-100 mt-3' onClick={submitData}>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact
