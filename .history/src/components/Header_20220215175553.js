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
    <div className="flex bg-black bar">
      
      <img
          className="logo0Image cursor-pointer	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
  <div class="contwainer">
   <div class="search-box">
      <input type="text" class="search-inputt" placeholder=""/>

      <button class="search-buttonn">
        <i class="fas fa-search"></i>
      </button>
   </div>
</div>


    </div>
  );
}

export default Header;
