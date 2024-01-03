import React from 'react';
import GalleryImageList from './GalleryImageList';
import NavBar from '../nav-bar/NavBar';
import Footer from '../Footer/Footer';
import AboutUs from '../aboutUs/AboutUs';

function GalleryPage() {
    return (
        <>
            <NavBar />
            <GalleryImageList />
            <AboutUs />
            <Footer />
        </>
    );
}

export default GalleryPage;
