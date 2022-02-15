import Image from "next/image";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
// import firebase from "../Firebase/Firebase";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <Navbar className="bg-black " expand="lg" sticky="top">
      <Container className=" header	">
        {/* IMAGE ICON */}

        {/* <Navbar.Brand className=" logoo " href="#">
                   

                </Navbar.Brand> */}

        <img
          className="logoImage cursor-pointer	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="ml-10" id="navbarScroll">
          <Nav className=" ham" style={{ maxHeight: "500px" }} navbarScroll>
            <NavDropdown
              className="ml-10 mt-1 text-navbar text-base font-medium shirtt"
              title={
                <span className=" text-white text-base my-auto">Home</span>
              }
              id="dropdown-button-dark-example1"
              onClick={() => router.push("/")}
            ></NavDropdown>
            <NavDropdown
              className="ml-10 mt-1 trouserrs"
              title={<span className="text-white my-auto">About Us</span>}
              id="basic-nav-dropdown"
              onClick={() => router.push("/About")}
            ></NavDropdown>
            <NavDropdown
              className="ml-10 mt-1 footwear"
              title={<span className="text-white my-auto">All Products</span>}
              id="basic-nav-dropdown"
              onClick={() => router.push("/Shop")}
            ></NavDropdown>

            {/* SHOPPING CART */}
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="carticon" href="#action1">
          <div
            onClick={() => router.push("/checkout")}
            className="cursor-pointer  relative links flex items-center"
          >
            <span className="absolute icoontext ml-18 top-0 right-0 md:right-10 h-4 w-4 mt-2    text-white font-bold">
              {" "}
              {items.length}{" "}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
             width={
                 
             }>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
