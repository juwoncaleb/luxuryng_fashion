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
    <div>
      <div className="bg-black items-center">
        
      <img
          className="logoImage cursor-pointer	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
      </div>

      <div className="flex justify-between bg-black">
     
     <p className="text-white mt-3">Home</p>
     <p className="text-white mt-3">About Us</p>

     <p className="text-white mt-3">All Products</p>
     
   </div>
    </div>
  );
}

export default Header;
