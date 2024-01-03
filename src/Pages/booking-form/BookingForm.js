import React, { useState } from 'react';
import bookNowImg from './Images/Book_Now.png';
import baliimg from './Images/bali.jpg';
import Kula from './Images/Kula lumpur.avif';
import philip from './Images/phiphi-island.jpg';
import singapo from './Images/singapore.jpeg';
import statuOfL from './Images/statue of liberty.webp';
import vietnam from './Images/vietnam.webp';
import rome from './Images/great wall.webp';
import wall from './Images/great wall.webp';
import formImg1 from '../main-page/hallstatt-3609863_1920.jpg'
import './bookingForm.css';
import { ToastContainer, toast } from 'react-toastify';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function BookingForm() {

    const [place, setPlace] = useState('Where');
    const [days, setDays] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    
        



    const handleBooking = () => {
        // toast.success('Booking successful !')
        if (place && days && startDate && endDate && description) {
            toast.success('Booking successful !', {position: 'top-center'})
        } else {
            toast.error('All fields are mandatory !', {position: 'top-center'})
        }
    }

    return (
        <>
            <div classNameName='formContainer'>
                <div className="section_3">
                    <h1 className="text-center title">Come fly <span>with Us</span></h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card-body">
                                <img src={bookNowImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <form action='' className="form-input text-center">
                                    <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Where</InputLabel>
                                    <Select
                                    style={{ width: '-webkit-fill-available', height: '40px', marginBottom: '10px', marginTop: '10px'}}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={place}
                                        onChange={(event) => setPlace(event.target.value)}
                                        autoWidth
                                        label="Where"
                                    >
                                        <MenuItem value="">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>India</MenuItem>
                                        <MenuItem value={21}>Germany</MenuItem>
                                        <MenuItem value={22}>Thiland</MenuItem>
                                        <MenuItem value={10}>United State</MenuItem>
                                        <MenuItem value={21}>France</MenuItem>
                                        <MenuItem value={22}>Italy</MenuItem>
                                        <MenuItem value={22}>Istanbul</MenuItem>
                                        <MenuItem value={10}>Dubai</MenuItem>
                                        <MenuItem value={21}>Switzerland</MenuItem>
                                        <MenuItem value={22}>Africa</MenuItem>
                                    </Select>
                                    </FormControl>
                                    {/* <input type="text" id="demo-simple-select-autowidth-label" className="form-control mb-3" onChange={(event) => setPlace(event.target.value)} placeholder="Where To" required /> */}
                                    <input type="number" className="form-control mb-3" onChange={(event) => setDays(event.target.value)} placeholder="How many" required />
                                    <input type="date" className="form-control mb-3" onChange={(event) => setStartDate(event.target.value)} placeholder="When" required />
                                    <input type="date" className="form-control mb-3" onChange={(event) => setEndDate(event.target.value)} placeholder="End Date" required />
                                    <textarea className="form-control mb-3" placeholder="Description" onChange={(event) => setDescription(event.target.value)} rows="3" minlength="50" maxlength="500" required></textarea>
                                    <div className="buttons">
                                        <button type="button" onClick={handleBooking} className="btn btn-warning ps-5 pe-5 book-now">Book Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
                <div>
                    <div className="section_4">
                        <div className="container">
                            <h2 className="title text-center pt-4 pb-4">Packages</h2>
                            <div className="row">
                                <div className="center-card col-md-4">
                                    <div className="card" style={{ width: '20rem' }}>
                                        <img src={baliimg} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Bali</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                            <p>⭐⭐⭐⭐</p>
                                            <h5>Price: 799$</h5>
                                            <a href="/#" className=" btn btn-warning">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="center-card col-md-4">
                                    <div className="card" style={{ width: '20rem' }}>
                                        <img src={wall} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">China</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                            <p>⭐⭐⭐</p>
                                            <h5>Price: 749$</h5>
                                            <a href="/#" className="btn btn-warning">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="center-card col-md-4">
                                    <div className="card" style={{ width: '20rem' }}>
                                        <img src={Kula} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Singapore</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <h5>Price: 699$</h5>
                                            <a href="/#" className="btn btn-warning">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="center-card col-md-4">
                                    <div className="card" style={{ width: '20rem' }}>
                                        <img src={philip} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Thailand</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <h5>Price: $ 699</h5>
                                            <a href="/#" className="btn btn-warning">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="center-card col-md-4">
                                    <div className="card" style={{ width: '20rem' }}>
                                        <img src={rome} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Italy</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                            <p>⭐⭐⭐⭐</p>
                                            <h5>Price: $ 499</h5>
                                            <a href="/#" className="btn btn-warning">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="center-card col-md-4">
                                    <div className="card" style={{ width: '20rem' }}>
                                        <img src={vietnam} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Vietnam</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <h5>Price: $ 549</h5>
                                            <a href="/#" className="btn btn-warning">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section_5">
                    <h1 className="title text-center pt-4 pb-4">Why Choose us?</h1>
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card border-0 text-center">
                                    <div className="card-body p-0 m-0">
                                        <h1><i className="bi bi-person-check"></i></h1>
                                        <p className="card-text text">Expert and Professional Team.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card border-0 text-center">
                                    <div className="card-body p-0 m-0">
                                        <h1><i className="bi bi-wallet2"></i></h1>
                                        <p className="card-text text">10,000+ Satisfied travellers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card border-0 text-center">
                                    <div className="card-body p-0 m-0">
                                        <h1><i className="bi bi-person-vcard"></i></h1>
                                        <p className="card-text text">Budget Friendly Tour Packages.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card border-0 text-center">
                                    <div className="card-body p-0 m-0">
                                        <h1><i className="bi bi-emoji-smile-fill"></i></h1>
                                        <p className="card-text text">98% Our Travelers are Happy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BookingForm;
