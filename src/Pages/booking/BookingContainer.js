import React from 'react';
import NavBar from '../nav-bar/NavBar';
import Footer from '../Footer/Footer';
import BookingForm from '../booking-form/BookingForm';

function BookingContainer() {
    return (
        <>
            <NavBar />
            <BookingForm />
            <Footer />
        </>
    );
}

export default BookingContainer;
