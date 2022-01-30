import Image from "next/image";
import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import firebase from "../Firebase/Firebase";
import { signIn, signOut, useSession } from "next-auth/client"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { selectItems } from "../slices/basketSlice";



function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)

    return (


        <Navbar className="bg-black " expand="lg" sticky="top">
            <Container className=" header	"  >

                {/* IMAGE ICON */}
                <Navbar.Brand className="ml-10 mt-1 brand" href="#">

                    <Image
                        onClick={() => router.push('/')}
                        src="/img/logo.png"
                        width={150}
                        height={80}
                    />

                </Navbar.Brand>
                <Nav.Link className="ml-10 mt-1" href="#action1">

                    <div onClick={() => router.push('/checkout')} className="cursor-pointer cart relative links flex items-center">
                        <span className="absolute ml-18 top-0 right-0 md:right-10 h-4 w-4    text-white text-2xl font-bold"> {items.length} </span>
                        <br />
                        <br />
                        <br />
                        <br />

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>                    </div>
                </Nav.Link>

                
               

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="ml-10" id="navbarScroll">





                    <Nav className=" ham" style={{ maxHeight: '500px' }} navbarScroll  >






                        <NavDropdown className="ml-10 mt-1 text-navbar text-base font-medium"
                            title={<span className=" text-white my-auto">SHIRTS</span>} id="dropdown-button-dark-example1">
                            <NavDropdown.Item onClick={() => router.push('/Shirt')} href="#action/3.1"><p >SHIRTS</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/Jacket')} href="#action/3.2"><p >JACKET</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/SweatShirt')} href="#action/3.3"><p >SWEATSHIRTS</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/Hoodies')} href="#action/3.3"><p >HOODIE</p></NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown className="ml-10 mt-1"
                            title={<span className="text-white my-auto">PANTS</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><p > JEANS</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><p >JOGGERS</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/Shorts')} href="#action/3.3"><p >SHORTS</p></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="ml-10 mt-1"
                            title={<span className="text-white my-auto">SHOES</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => router.push('/Shoes')} href="#action/3.1"><p >SLIDES</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><p >SNEAKER</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><p >COVER SHOES</p></NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link onClick={() => router.push('/Caps')} className="ml-10 mt-1 text-white" href="#action2"><p >CAPS</p></Nav.Link>
                        <Nav.Link onClick={() => router.push('/Caps')} className="ml-10 mt-1 text-white" href="#action2"><p >BRAND</p></Nav.Link>



                        {/* SHOPPING CART */}

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>




    )
}

export default Header
