import React from "react";
import { Icon } from "@iconify/react";

function New() {
  return (
    <div>
      <div className="grid mobileView  ">
        <img
          className="logoImage cursor-pointer mobileImage 	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />
        <p className="text-white  flex-1 mobileImage">Home</p>
        <p className="text-white  flex-1 mobileImage">Home</p>
        <p className="text-white  flex-1 mobileImage">Home</p>
        <p className="text-white  flex-1 mobileImage">Home</p>
        <input className="navSearch   mobileImage"></input>
        <p className="text-white  mobileImage flex-1">
          <Icon icon="akar-icons:search" color="white" width="30" />
        </p>
        <p className="text-white catt mobileImage  flex-1">
          <Icon icon="mi:shopping-cart" color="white" width="48" />
        </p>
      </div>
    </div>
  );
}

export default New;
