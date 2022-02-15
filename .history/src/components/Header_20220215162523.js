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
    <div className="flex justify-evenly bg-black">
      
      <img
          className="logoImage cursor-pointer	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
        <p className="text-white">hh</p>
        <p className="text-white">
bb
        </p>
        <p className="text-white">seatch</p>
        <p>cart</p>
    </div>
  );
}

export default Header;