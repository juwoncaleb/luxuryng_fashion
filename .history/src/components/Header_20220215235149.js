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
    <Navbar className="bg-black headder" expand="lg" sticky="top">
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
          <Nav className=" ham" style={{ maxHeight: "100px" }} navbarScroll>
            

          
            <div>
              <p className="text-white">Home</p>
              <p className="text-white">Home</p>

            </div>


            
           <input className="searching mt-2 mr-2" placeholder=""></input>
           <Icon icon="akar-icons:search"  className="mr-10 mt-2 " color="white" width="25" />

            {/* SHOPPING CART */}
          </Nav>
        </Navbar.Collapse>
        
          <div
            onClick={() => router.push("/checkout")}
            className="cursor-pointer carting  md:mt-4"
           >
            <span className="absolute icoontext ml-18 top-0 right-0 md:right-10 h-4 w-4 mt-2    text-white font-bold">
              {" "}
              {items.length}{" "}
            </span>
            <Icon icon="mi:shopping-cart" color="white"   width="48" />
          </div>
      
      </Container>
    </Navbar>
  );
}

export default Header;