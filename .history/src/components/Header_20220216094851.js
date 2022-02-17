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
      <div className="landscape flex ">
        <img
          className="lux cursor-pointer flex-1 mt-2	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
        <p className="text-white flex-1 mt-4">Home</p>
        <p className="text-white flex-1 mt-4">About Us</p>
        <p className="text-white flex-1 mt-4">Clothing</p>
        <input className="Searchbaar mt-4" />
<p
        
      </div>
      {/* <div className="Mobile grid">
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
      </div> */}
    </div>
  );
}

export default Header;
