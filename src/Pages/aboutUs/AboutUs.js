import { Box, Typography } from '@mui/material';
import React from 'react';
import tripLogo from '../nav-bar/tripLogo.jpg'
import './aboutUs.css'

function AboutUs() {
    return (
        <>
            <div className='aboutContainer'>
                <Box
                    sx={{
                        boxShadow: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        p: 1,
                        m: 1,
                        borderRadius: 2,
                        textAlign: 'center',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                    }}
                >
                    <Typography variant="h2" gutterBottom>
                        About Us
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', padding: '32px' }}>
                    <Box sx={{ width: '50%' }}>
                        <div>
                            {/* Add the image title */}
                            <Typography variant="h4" gutterBottom>
                                Company Image Title
                            </Typography>
                            <img src={tripLogo} style={{ width: '100%', height: 'auto' }} alt="Fun Trip logo" />
                        </div>
                    </Box>
                    <Box sx={{ width: '50%', paddingLeft: '16px' }}>
                        <div>
                            {/* Add company information, establishment, and other details */}
                            <Typography variant="h4" gutterBottom>
                                Company Information
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <p>Welcome to Fun Trip – a family-owned French DMC that takes pride in curating extraordinary and personalized journeys across the stunning landscapes of France. Our roots are firmly planted in the picturesque Provence, where our journey began.</p>
                                We are a leading organization in the field of Trip, Tour and Travel
                            </Typography>
                            <Typography variant="subtitle1">
                                Established in: Jan 2023
                                <blockquote className="blackQuote">
                                    <p>world truly has something for every taste, from untouched nature to dynamic cities and from quaint seaside villages to abbeys perched in the mountains. It’s a hub for art, culture, gastronomy, fashion, and much, much more. We look forward to helping you or your clients to explore hidden jewels, visit iconic must-sees, shop in a bustling market, and immerse yourselves in the French<em> Art de Vivre</em>.</p>
                                    <p><span style={{fontWeight: 'bold', fontSize: '24px'}}>F</span>un <span style={{fontWeight: 'bold', fontSize: '24px'}}>T</span>rip Travel welcomes inquiries from both travelers and travel agencies. Travelers to France may reach us through <strong><a style={{color: '#1b3154'}} href="https://frenchsidetravel.com/customize-your-trip/">our inquiry form</a>.</strong></p>
                                </blockquote>
                            </Typography>
                            {/* Add more details as needed */}
                        </div>
                    </Box>
                </Box>
            </div>
        </>
    );
}

export default AboutUs;
