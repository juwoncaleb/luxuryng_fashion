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
    <div className="flex justify-evenly">
      
      <img
          className="logoImage cursor-pointer	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
        <p>hh</p>
        <p>
bb
        </p>
        <p>seatch</p>
        <p>cart</p>
    </div>
  );
}

export default Header;
