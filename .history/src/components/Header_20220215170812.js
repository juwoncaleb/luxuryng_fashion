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
      <div className="flex justify-between bg-black ">
        <img
          className="logoimage cursor-pointer mt-3 ml-10 md:ml-40	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
       <p className="text-white">ff</p>
       <p className="text-white">ff</p>

      </div>
    </div>
  );
}

export default Header;
