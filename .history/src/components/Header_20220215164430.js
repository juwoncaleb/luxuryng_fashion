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
    <div className="flex justify-around bg-black">
      <img
        className="logoImage cursor-pointer	"
        onClick={() => router.push("/")}
        src="/img/logo.png"
      />
      <p className="text-white mt-3">Home</p>
      <p className="text-white mt-3">About Us</p>

      <p className="text-white mt-3">All Products</p>
      
    </div>
  );
}

export default Header;
