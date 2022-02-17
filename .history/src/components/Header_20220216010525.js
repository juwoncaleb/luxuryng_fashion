import React from "react";
import { Icon } from "@iconify/react";


function Header() {
  return (
   <div>
      <div className="bg-black navbarr flex">
      <img className="luxury flex-1" src="/img/logo.png" />{" "}
      <p className="text-white flex-1">Home</p>
      <p className="text-white flex-1">Home</p>
<input id="navbarinput flex-1" placeholder="Search Here "></input>
<p className="text-white flex-1"><Icon icon="akar-icons:search" width="30" />
</p>
<p className="text-white flex-1">Home</p>


    </div>
   </div>

  );
}

export default Header;
