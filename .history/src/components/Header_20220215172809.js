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
      <div className="flex  bg-black ">
        <img
          className="logoimage flex-1 cursor-pointer  "
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
        <p className="text-white flex-initial  mt-3">Home</p>
        <p className="text-white flex-initial  mt-3">All Product</p>
        <p className="text-white flex-initial  mt-3">All Product</p>

        <Icon icon="clarity:shopping-cart-line" color="white" width="60"  className="flex-1"/>

      </div>
    </div>
  );
}

export default Header;
