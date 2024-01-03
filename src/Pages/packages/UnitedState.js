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
import ChryslerBuilding from '../gallery/images/Chrysler Building in New York.jpg'
import EmpireStateBuilding  from '../gallery/images/Empire State Building in New York.jpg'
import Cityscape from '../gallery/images/Cityscape.jpg'
import GoldenGateBridge from '../gallery/images/GoldenGate Bridge.jpg'
import d from '../gallery/images/Chrysler Building in New York.jpg'


const UnitedState = () => {
    return (
        <>
            <NavBar />
            <div>
                <div className="section_4">
                    <div className="container">
                        <h2 className="title text-center pt-4 pb-4">Choose any Packages in United state</h2>
                        <div className="row">
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={ChryslerBuilding} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Chrysler Building</h5>
                                        <p className="card-text">Chrysler Building, New York sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐</p>
                                        <h5>Price: 799$</h5>
                                        <a href="/#" className=" btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card"  style={{ width: '20rem' }}>
                                    <img src={EmpireStateBuilding} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Empire State Building</h5>
                                        <p className="card-text">Empire State Building, New York sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐</p>
                                        <h5>Price: 749$</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={Cityscape} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">City scape, USA</h5>
                                        <p className="card-text">City scape, USA sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
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
                                        <h5 className="card-title">USA</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <h5>Price: 699$</h5>
                                        <a href="/#" className="btn btn-warning">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="center-card col-md-4">
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={GoldenGateBridge} style={{ height: '200px'}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Golden Gate Bridge</h5>
                                        <p className="card-text">Golden Gate Bridge, USA sit amet consectetur adipisicing elit. Incidunt, accusantium.</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <h5>Price: $ 699</h5>
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
                        </div>
                    </div>
                </div>
            </div>
            <WhereChooseUs />
            <Footer />
        </>
    );
}


export default UnitedState;
