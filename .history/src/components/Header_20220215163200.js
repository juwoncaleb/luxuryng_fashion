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
      <p className="text-white">bb</p>
      <div class="search">
        <input type="checkbox" id="trigger" class="search__checkbox" />
        <label class="search__label-init" for="trigger"></label>
        <label class="search__label-active" for="trigger"></label>
        <div class="search__border"></div>
        <input type="text" class="search__input" />
        <div class="search__close"></div>
      </div>
      <p className="text-white">cart</p>
    </div>
  );
}

export default Header;
