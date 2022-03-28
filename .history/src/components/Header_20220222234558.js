import Image from "next/image";
import React, { useState } from "react";
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
  const [mobileToggle, setMobileToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div clas>
      <div className="landscape flex ">
        <img
          className="lux cursor-pointer flex-1 mt-2	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
        <p className="text-white flex-1 mt-4 togglebutton">Home</p>
        <p className="text-white flex-1 mt-4 togglebutton">About Us</p>
        <p className="text-white flex-1 mt-4 togglebutton">Clothing</p>
        <input type="text"   onChange={(event) => {
            setSearchTerm(event.target.value);
          }} className="Searchbaar mt-4 togglebutton" />
        <Icon icon="akar-icons:search" color="white" width="33" className="mt-6 ml-2 mr-2 seachlogo" />


        <p onClick={() => router.push("/checkout")} className="Togglle cursor-pointer">
          {" "}
          <span className="text-white itemlenght">{items.length}</span>{" "}
          <Icon
            icon="mi:shopping-cart"
            color="white"
            className="mb-1"
            width="48"
          />
        </p>
        <p
          className="text-white flex-1 mt-4 Togglle"
          onClick={() => {
            setMobileToggle(!mobileToggle);
          } }
        >
          <Icon icon="radix-icons:hamburger-menu" color="red" width="48" className="hamb" />

        </p>
      </div>
      {mobileToggle ? (
        <div className="Mobile grid">
          
          <p className="text-white">Home</p>
          <p className="text-white">About Us</p>
          <p className="text-white">Clothing</p>
          <div className="flex">
          <input   onChange={(event) => {
            setSearchTerm(event.target.value);
          }} type="text" className="mobilesearch" placeholder=" " />
          <Icon icon="akar-icons:search" color="white" width="33" className=" ml-2 mr-2 " />

            </div>
          <p  onClick={() => router.push("/checkout")} className="text-white cursor-pointer ">
             <span className="itemtextmobile">{items.length}</span>
            <Icon icon="mi:shopping-cart" color="white" width="48" />
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Header;