import Image from "next/image";
import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import firebase from "../Firebase/Firebase";
import { signIn, signOut, useSession } from "next-auth/client"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Icon } from '@iconify/react';
import { selectItems } from "../slices/basketSlice";



function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)

    return (

        import React, { useState } from "react";
        import "./navbar.css";
        import {
          FaFacebookSquare,
          FaInstagramSquare,
          FaYoutubeSquare
        } from "react-icons/fa";
        import { GiHamburgerMenu } from "react-icons/gi";
        
        import { NavLink } from "react-router-dom";
        
        const Navbar = () => {
          const [showMediaIcons, setShowMediaIcons] = useState(false);
          return (
            <>
              <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                  <h2>
                    <span>R</span>ishabh
                    <span>M</span>ahajan
                  </h2>
                </div>
        
                {/* 2nd menu part  */}
                <div
                  className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                  }
                >
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">about</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service">services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">contact</NavLink>
                    </li>
                  </ul>
                </div>
        
                {/* 3rd social media links */}
                <div className="social-media">
                  <ul className="social-media-desktop">
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                        target="_thapa"
                      >
                        <FaFacebookSquare className="facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/thapatechnical/"
                        target="_thapa"
                      >
                        <FaInstagramSquare className="instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                        target="_thapa"
                      >
                        <FaYoutubeSquare className="youtube" />
                      </a>
                    </li>
                  </ul>
        
                  {/* hamburget menu start  */}
                  <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                      <GiHamburgerMenu />
                    </a>
                  </div>
                </div>
              </nav>
        
              {/* hero section  */}
              {/* <section className="hero-section">
                <p>Welcome to </p>
                <h1>Thapa Technical</h1>
              </section> */}
            </>
          );
        };
        
        export default Navbar;
        
        <Navbar className="bg-black " expand="lg" sticky="top">
            <Container className=" header	"  >

                {/* IMAGE ICON */}


                {/* <Navbar.Brand className=" logoo " href="#">
                   

                </Navbar.Brand> */}


                <img className="logoImage" onClick={() => router.push('/')}
                    src="/img/logo.png" />



                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="ml-10" id="navbarScroll">





                    <Nav className=" ham" style={{ maxHeight: '500px' }} navbarScroll  >






                        <NavDropdown className="ml-10 mt-1 text-navbar text-base font-medium shirtt"
                            title={<span className=" text-white text-base my-auto">SHIRTS</span>} id="dropdown-button-dark-example1">
                            <NavDropdown.Item onClick={() => router.push('/Shirt')} href="#action/3.1"><p >SHIRTS</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/Jacket')} href="#action/3.2"><p >JACKET</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/SweatShirt')} href="#action/3.3"><p >SWEATSHIRTS</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/Hoodies')} href="#action/3.3"><p >HOODIE</p></NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown className="ml-10 mt-1 trouserrs"
                            title={<span className="text-white my-auto">PANTS</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><p > JEANS</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><p >JOGGERS</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/Shorts')} href="#action/3.3"><p >SHORTS</p></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="ml-10 mt-1 footwear"
                            title={<span className="text-white my-auto">SHOES</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => router.push('/Shoes')} href="#action/3.1"><p >SLIDES</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><p >SNEAKER</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><p >COVER SHOES</p></NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link onClick={() => router.push('/Caps')} className="ml-10 mt-1 capp text-white" href="#action2"><p >CAPS</p></Nav.Link>



                        {/* SHOPPING CART */}

                    </Nav>

                </Navbar.Collapse>
                <Nav.Link className="carticon" href="#action1">

                    <div onClick={() => router.push('/checkout')} className="cursor-pointer  relative links flex items-center">
                        <span className="absolute icoontext ml-18 top-0 right-0 md:right-10 h-4 w-4 mt-2    text-white font-bold"> {items.length} </span>
                        <Icon icon="bytesize:bag" color="white"  width="37" />


                    </div>
                </Nav.Link>
            </Container>

        </Navbar>




    )
}

export default Header
