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
      <p className="text-white mt-3">hh</p>
      <p className="text-white mt-3">bb</p>

      <p className="text-white mt-3">cart</p>
      <div class="search-box">
        <button class="btn-search">
          <i class="fas fa-search"></i>
        </button>
        <input
          type="text"
          class="input-search"
          placeholder="Type to Search..."
        />
      </div>
    </div>
  );
}

export default Header;
