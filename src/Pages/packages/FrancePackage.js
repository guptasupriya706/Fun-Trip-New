import React from "react";
import baliimg from '../booking-form/Images/bali.jpg';
import wall from '../booking-form/Images/great wall.webp';
import Kula from '../booking-form/Images/Kula lumpur.avif';
import philip from '../booking-form/Images/phiphi-island.jpg';
import rome from '../booking-form/Images/great wall.webp';
import vietnam from '../booking-form/Images/vietnam.webp';
import NavBar from "../nav-bar/NavBar";
import Footer from "../Footer/Footer";
import WhereChooseUs from "../booking-form/WhereChooseUs";
import france2 from '../gallery/images/France.jpg'
import france1 from '../gallery/images/France123.jpg'
import FrankfurtOldTown from '../gallery/images/FrankfurtOldTown.jpg'


const GermanyPackage = () => {
    return (
        <>
            <NavBar />
            <div>
                <div className="section_4">
                    <div className="container">
                        <h2 className="title text-center pt-4 pb-4">Choose any Packages in Germany</h2>
                        <div className="row">
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={FrankfurtOldTown} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Frank furt Old Town, France</h5>
                                        <p className="card-text">Frank furt Old Town, France sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐</p>
                                        <h5>Price: 799$</h5>
                                        <a href="/#" className=" btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={france2} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Some where in France</h5>
                                        <p className="card-text">Some where in France sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐</p>
                                        <h5>Price: 749$</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={france1} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">France</h5>
                                        <p className="card-text">France sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <h5>Price: 699$</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
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
                                    <img src={FrankfurtOldTown} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Frankfurt OldTown</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <h5>Price: $ 699</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={rome}  style={{ height: '200px'}} className="card-img-top" alt="..." />
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
            <WhereChooseUs />
            <Footer />
        </>
    );
}


export default GermanyPackage;
