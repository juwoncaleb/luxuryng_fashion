import Image from "next/image";
import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import firebase from "../Firebase/Firebase";
import { signIn, signOut, useSession } from "next-auth/client"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Icon } from '@iconify/react';
import { selectItems } from "../slices/basketSlice";



function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)

    return (


<header class="header-fixed">

<div class="header-limiter">

    

    <nav>
    <img src="/img/logo.png"/ class>
        <a href="#" class="selected text-black">Blog</a>
        <a href="#" class="selected text-black">Pricing</a>
        <a href="#" class="selected text-black">About</a>
        <a href="#" class="selected text-black">Faq</a>
        <a href="#" class="selected text-black"> Contact</a>
    </nav>

</div>

</header>




    )
}

export default Header
