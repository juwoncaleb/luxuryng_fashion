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
    <div className="bg-black flex naviBar ">
      <img
        className="logoImage cursor-pointer  flex-1	"
        onClick={() => router.push("/")}
        src="/img/logo.png"
      />
      <p className="text-white mt-4 flex-1">home</p>
      <p className="text-white  mt-4 flex-1">home</p>
      <p className="text-white  mt-4 flex-1">home</p>
      <input className="navSearch  mt-4"></input>
      <p className="text-white flex-1"><Icon icon="akar-icons:search" color="white" width="30" />
</p>
      <p className="text-white flex-1">home</p>
      <p className="text-white flex-1 togglebutton">home</p>



      
    </div>
  );
}

export default Header;
