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
      <div className="bg-black ">
        <img
          className="logoimage cursor-pointer	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
      </div>

      <div className="flex justify-between bg-black ">
        <p className="text-white mt-3 ml-10 md:ml-40"></p>
        <p className="text-white mt-3">Home</p>
        <p className="text-white mt-3">
          {" "}
          <div class="search-box">
            <button class="btn-search">
              <i class="fas fa-search"></i>
            </button>
            <input type="text" class="input-search mb-3" placeholder="" />
          </div>
        </p>
        <p className="text-white mt-3">About Us</p>

        <p className="text-white mt-3 mr-10 md:mr-40"></p>
      </div>
    </div>
  );
}

export default Header;
