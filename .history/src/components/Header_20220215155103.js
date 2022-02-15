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
    <nav class="navbar">
    <i class="material-icons menu-icon">
      menu
    </i>
    <div class="logo">
      <img src="https://github.com/subeshb1/GrabCheap/blob/master/img/logo_inverse.jpg?raw=true" alt="logo"/>
      <div class="text">    GrabCheap
      </div>
    </div>
    <div class="item search right" tabindex="0">
      <div class="search-group">
        <select>
          <option value="all">All</option>
          <option value="all">Mens</option>
          <option value="all">Womens</option>
          <option value="all">Winter</option>
          <option value="all">Summer</option>
        </select>
      <input type="text"/>
      <i class="material-icons search-icon">
        search
      </i>
        </div>
    </div>
    
    
    <a href="" class="  item">
  
      <div class="group">
        <i class="material-icons" >
          account_circle
        </i>
        <div class="detail">
          Account
          <div class="sub">Sign In</div>
        </div>
      </div>
    </a>
  
    <a href="" class="item">
      <div class="group">
        <i class="material-icons">
          shopping_cart
        </i>  
        <div class="detail">
          Cart 
          <div class="sub">Rs 0.0</div>
        </div>
      </div>
    </a>
  </nav>
  );
}

export default Header;
