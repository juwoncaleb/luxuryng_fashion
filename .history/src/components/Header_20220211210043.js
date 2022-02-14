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
<img height={10} src="/img/logo.png"/>
    
        <a href="#" class="selected">Blog</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
    </nav>

</div>

</header>




    )
}

export default Header
