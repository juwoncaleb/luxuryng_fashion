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







                        <Nav.Link onClick={() => router.push('/')} className="ml-10 mt-1 capp text-white" href="#action2"><p >Home</p></Nav.Link>
                        <Nav.Link onClick={() => router.push('/Ab')} className="ml-10 mt-1 capp text-white" href="#action2"><p >About us</p></Nav.Link>
                        <Nav.Link onClick={() => router.push('/Caps')} className="ml-10 mt-1 capp text-white" href="#action2"><p >Contact us </p></Nav.Link>
                        <Nav.Link onClick={() => router.push('/Caps')} className="ml-10 mt-1 capp text-white" href="#action2"><p >Services</p></Nav.Link>




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
