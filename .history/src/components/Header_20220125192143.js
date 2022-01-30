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
                        <Nav.Link onClick={() => router.push('/Caps')} className="ml-10 mt-1 text-white brad" href="#action2"><p >BRAND</p></Nav.Link>



                        {/* SHOPPING CART */}

                    </Nav>

                </Navbar.Collapse>
                <Nav.Link className="carticon" href="#action1">

                    <div onClick={() => router.push('/checkout')} className="cursor-pointer  relative links flex items-center">
                        <span className="absolute icoontext ml-18 top-0 right-0 md:right-10 h-4 w-4 mt-2    text-white text-2xl font-bold"> {items.length} </span>
                        <Icon icon="bytesize:bag" color="white" className="" />


                    </div>
                </Nav.Link>
            </Container>

        </Navbar>




    )
}

export default Header
