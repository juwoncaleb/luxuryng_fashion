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
      <div className="landscape flex">
        <img
          className="lux cursor-pointer flex-1	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
        <p className="text-white flex-1">Home</p>
        <p className="text-white flex-1">About Us</p>
        <p className="text-white flex-1">Clothing</p>
        <input />
        <p
          onClick={() => router.push("/checkout")}
          className="cursor-pointer carting  md:mt-4"
        >
          <span className="absolute icoontext ml-18 top-0 right-0 md:right-10 h-4 w-4 mt-2    text-white font-bold">
            {" "}
            {items.length}
          </span>
          <Icon icon="mi:shopping-cart" color="white" width="48" />
        </p>
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
        <p
          onClick={() => router.push("/checkout")}
          className="cursor-pointer carting  md:mt-4"
        >
          <span className="absolute icoontext ml-18 top-0 right-0 md:right-10 h-4 w-4 mt-2    text-white font-bold">
            {items.length}
          </span>
          <Icon icon="mi:shopping-cart" color="white" width="48" />
        </p>
      </div>
    </div>
  );
}

export default Header;
