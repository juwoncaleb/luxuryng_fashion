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
          </div>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
