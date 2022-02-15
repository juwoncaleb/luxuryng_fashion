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
    <div className=" bg-black bar">
      
      <div className=" flex mb-4 justify-evenly"
      >
        <img
        className="logo0Image  cursor-pointer	"
        onClick={() => router.push("/")}
        src="/img/logo.png"
      />
      <p className="  text-white">Home</p>
      <p className="  text-white" >About Us</p>
      <p className="  text-white">Products</p>
      <p className="  text-white">New Stocks</p>
      
      </div>
      <div>
      
        
      </div>
    </div>
  );
}

export default Header;