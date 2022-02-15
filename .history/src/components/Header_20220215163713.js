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
      
      <p className="text-white">cart</p>
      <div class="search-box">
    <button class="btn-search"><i class="fas fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..."/>
  </div>


<footer>
  <p>
		Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://codepen.io/ahmadbassamemran/">Ahmad Emran</a>
    Follow me : 
      <a target="_blank"  href="https://www.instagram.com/ahmadbassamemran/"><i class="fab fa-instagram"></i></a>
    <a target="_blank"  href="https://www.linkedin.com/in/ahmademarn/"><i class="fab fa-linkedin"></i></a>
    <a target="_blank" href="https://codepen.io/ahmadbassamemran/"><i class="fab fa-codepen"></i></a> 
        <a target="_blank" href="https://dev.to/ahmadbassamemran"><i class="fab fa-dev"></i></a> 
             <a target="_blank" href="https://twitter.com/ahmadbassamemra"><i class="fab fa-twitter-square"></i></a> 
	</p>
</footer>

<div class="youtubeBtn">
  <a target="_blank" href="https://www.youtube.com/AhmadEmran?sub_confirmation=1">
      <span>Watch on YouTube</span>
  <i class="fab fa-youtube"></i>
    </a>

</div> 
    </div>
  );
}

export default Header;
