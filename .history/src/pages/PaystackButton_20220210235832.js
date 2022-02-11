import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";


function Checkout() {


  const items = useSelector(selectItems);
  
  return (
    <div>
      <Header />
      `${console.log(items)}`

    </div>
  );
}

export default Checkout;
