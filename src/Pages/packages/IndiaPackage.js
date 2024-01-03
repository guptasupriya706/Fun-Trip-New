import React from "react";
import baliimg from '../booking-form/Images/bali.jpg';
import wall from '../booking-form/Images/great wall.webp';
import Kula from '../booking-form/Images/Kula lumpur.avif';
import philip from '../booking-form/Images/phiphi-island.jpg';
import rome from '../booking-form/Images/great wall.webp';
import vietnam from '../booking-form/Images/vietnam.webp';
import NavBar from "../nav-bar/NavBar";
import Footer from "../Footer/Footer";
import taj from '../gallery/images/Taj Mahal.jpg'
import himalaya from '../gallery/images/Himalaya.jpg'
import IndGate from '../gallery/images/India Gate.jpg'
import aa from '../gallery/images/usaImg.jpg'
import WhereChooseUs from "../booking-form/WhereChooseUs";


const IndiaPackage = () => {
    return (
        <>
            <NavBar />
            <div>
                <div className="section_4">
                    <div className="container">
                        <h2 className="title text-center pt-4 pb-4">Choose any Packages in India</h2>
                        <div className="row">
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={taj} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Taj Mahal India</h5>
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
                                        <h5 className="card-title">Fort</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐</p>
                                        <h5>Price: 749$</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={himalaya}  style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Himalaya</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <h5>Price: 699$</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={IndGate} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">India Gate</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <h5>Price: $ 699</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={aa} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Kullu</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐</p>
                                        <h5>Price: $ 499</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={himalaya} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Himalaya</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <h5>Price: $ 549</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={IndGate} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">India Gate</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <h5>Price: $ 888</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={aa} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Kullu</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐</p>
                                        <h5>Price: $ 799</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={himalaya} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Himalaya</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <h5>Price: $ 900</h5>
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


export default IndiaPackage;
