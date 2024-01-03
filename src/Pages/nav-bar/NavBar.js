import React, { useEffect, useState } from 'react';
import './navBar.css';
import Logo from './tripLogo.jpg';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function NavBar() {

    const history = useNavigate();
    const [logindata, setLoginData] = useState([]);


    var todayDate = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);
        }

    }, [logindata, todayDate])

    const userlogout = ()=>{
        console.log('I am in userLogout');
        localStorage.removeItem("user_login")
        setLoginData([]);
        history("/home");
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><div className="header">
                        <img src={Logo} width="120px" height="60px" alt="Fun Trip logo" />
                    </div></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/booking">Book</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown">Packages</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/UnitedState">United State</a></li>
                                    <li><a class="dropdown-item" href="/IndiaPackage">India</a></li>
                                    <li><a class="dropdown-item" href="/FrancePackage">France</a></li>
                                    <li><a class="dropdown-item" href="/GermanyPackage">Germany</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/ServicesPage">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/gallery">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                        <ul>
                            <div style={{display: 'flex'}}>
                                <div style={{color: 'white', marginTop: '1rem', marginRight: '1rem'}}>
                                    {logindata && logindata.length ?
                                       <>
                                         <Button style={{color: 'black', backgroundColor: 'white'}} onClick={userlogout}>
                                            Log Out
                                         </Button> 
                                      </>
                                    :
                                    <Stack style={{marginTop: '1rem'}} spacing={2} direction="row">     
                                                <a class="nav-link" href="/login"><Button style={{color: 'black', backgroundColor: 'white'}} variant="text">Log In</Button></a>
                                                <a class="nav-link" href="/register"><Button style={{color: 'black', backgroundColor: 'white'}} variant="text">Register</Button></a>
                                    </Stack>
                                    }
                                    
                                </div>
                            </div>
                        </ul>
                        <ul class="d-flex flex-row me-2">
                        </ul>
                    </div>
                </div >
            </nav >
      </>
    );
}

export default NavBar;
