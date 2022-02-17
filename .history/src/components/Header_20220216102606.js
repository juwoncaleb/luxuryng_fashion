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
  const [mobileTogle]

  return (
    <div>
      <div className="landscape flex ">
        <img
          className="lux cursor-pointer flex-1 mt-2	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
        <p className="text-white flex-1 mt-4 togglebutton">Home</p>
        <p className="text-white flex-1 mt-4 togglebutton">About Us</p>
        <p className="text-white flex-1 mt-4 togglebutton">Clothing</p>
        <input className="Searchbaar mt-4 togglebutton" />

        <p className="Togglle"> 
          {" "}
          <span className="text-white itemlenght">{items.length}</span>{" "}
          <Icon
            icon="mi:shopping-cart"
            color="white"
            className="mb-1"
            width="48"
          />
        </p>
        <p className="text-white flex-1 mt-4 Togglle">Clothing</p>
      </div>
       <div className="Mobile grid">
        <img
          className="lux  cursor-pointer	flex-1"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
        <p className="text-white">Home</p>
        <p className="text-white">About Us</p>
        <p className="text-white">Clothing</p>
        <input />
      <p>            <Icon icon="mi:shopping-cart" color="white"   width="48" />
</p>
      </div> 
    </div>
  );
}

export default Header;
