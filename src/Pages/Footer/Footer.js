import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
            <footer class="bg-body-tertiary text-center">
                {/* <!-- Grid container --> */}
                <div class="container p-4 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <section class="mb-4">
                        {/* <!-- Facebook --> */}
                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor: '#3b5998'}}
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon icon={faFacebook} /></a>

                        {/* <!-- Twitter --> */}
                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor: '#55acee'}}
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon icon={faTwitterSquare} /></a>

                        {/* <!-- Google --> */}
                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor: '#dd4b39'}}
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon icon={faGoogle} /></a>

                        {/* <!-- Instagram --> */}
                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor: '#ac2bac'}}
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon icon={faInstagram} /></a>

                        {/* <!-- Linkedin --> */}
                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor: '#0082ca'}}
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon icon={faLinkedin} /></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                    © 2020 Copyright:
                    <a class="text-body" href="/home">funTrip.com</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    );
}

export default Footer;
