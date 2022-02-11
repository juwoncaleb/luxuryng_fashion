import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

import { signIn, signOut, useSession } from "next-auth/client";
import Payment from "../components/Pay";
import Items from "../app/Items";

function Checkout() {
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

  const router = useRouter();
  const [delivery, setDelivery] = useState("");

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal) + delivery;
  
  return (
    <div>
      <Header />
      `${console.log(items)}`

    </div>
  );
}

export default Checkout;
