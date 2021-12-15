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


        <Navbar className="bg-navbar " expand="lg" sticky="top">
            <Container className="justify-evenly	" fluid >

                {/* IMAGE ICON */}
                <Navbar.Brand className="ml-10 mt-1" href="#">

                    <Image onClick={() => router.push('/')}
                       src="/img/navlogo/png"
                         width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"/>

                </Navbar.Brand>


                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="ml-10" id="navbarScroll">
                    {/* SEARCH BAR */}


                    <Nav className="" style={{ maxHeight: '500px' }} navbarScroll  >



                        <NavDropdown className="ml-10 mt-1 text-navbar text-base font-medium"
                            title={<span className="text-warning my-auto">SHIRTS</span>} id="dropdown-button-dark-example1">
                            <NavDropdown.Item onClick={() => router.push('/Shirt')} href="#action/3.1"><p className="text-navbar text-base font-medium">SHIRTS</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/Jacket')} href="#action/3.2"><p >JACKET</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/SweatShirt')} href="#action/3.3"><p className="text-navbar text-base font-medium">SWEATSHIRTS</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/Hoodies')} href="#action/3.3"><p className="text-navbar text-base font-medium">HOODIE</p></NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown className="ml-10 mt-1"
                            title={<span className="text-warning my-auto">PANTS</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><p className="text-navbar text-base font-medium"> JEANS</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><p className="text-navbar text-base font-medium">JOGGERS</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push('/Shorts')} href="#action/3.3"><p className="text-navbar text-base font-medium">SHORTS</p></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="ml-10 mt-1"
                            title={<span className="text-warning my-auto">SHOES</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => router.push('/Shoes')} href="#action/3.1"><p className="text-navbar text-base font-medium">SLIDES</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><p className="text-navbar text-base font-medium">SNEAKER</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><p className="text-navbar text-base font-medium">COVER SHOES</p></NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link onClick={() => router.push('/Caps')} className="ml-10 mt-1" href="#action2"><p className="text-navbar text-base font-medium">CAPS</p></Nav.Link>
                        <Nav.Link onClick={() => router.push('/Caps')} className="ml-10 mt-1" href="#action2"><p className="text-navbar text-base font-medium">BRAND</p></Nav.Link>


                        {/* AUTHENTICATION */}
                        <Nav.Link className="ml-10 mt-1" href="#action1">
                            <div onClick={!session ? signIn : signOut} className="signIn cursor-pointer links">
                                <p className=" text-navbar text-base font-medium"> {session ? ` ${session.user.name} ` : "SIGN IN "}  </p>


                            </div>
                        </Nav.Link>

                        {/* SHOPPING CART */}

                        <Nav.Link className="ml-10 mt-1" href="#action1">
                            <div onClick={() => router.push('/checkout')} className="cursor-pointer  relative links flex items-center">
                                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold"> {items.length} </span>
                                <ShoppingCartIcon className="h-10" />
                                <p className="text-navbar hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                            </div>

                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>




    )
}

export default Header

