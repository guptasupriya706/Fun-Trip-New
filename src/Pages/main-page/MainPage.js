import React from 'react';
import './mainPage.css';
import BookingForm from '../booking-form/BookingForm';
import NavBar from '../nav-bar/NavBar';

function MainPage() {
    return (
        <>
            <NavBar />
            <div class="container-fluid mt-3 main-container">
                <div class="center">
                    <div style={{minHeight: '180px'}}>
                        <h1 style={{color: '#f5f5f0'}}>Welcome To <span style={{color: '#f28b50', fontSize: '50px'}}>Fun Trip</span></h1>
                        <h1 style={{color: '#f5f5f0'}}>Visit</h1><h1 style={{color: '#dcdc51'}}><span class="change"></span></h1>
                    </div>
                    <div>
                        <a class="nav-link" href="/booking"><button style={{backgroundColor: '#53885a'}} type="button" className="btn btn-secondary btn-lg book-btn">Book now</button></a>
                        {/* <button type="button" class="btn btn-secondary btn-lg book-btn">Book now</button> */}
                    </div>
                </div>
            </div>
            <BookingForm />
            
      </>
    );
}

export default MainPage;
