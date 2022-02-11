import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { PaystackButton } from 'react-paystack';


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
