import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useRouter } from "next/router";

import { signIn, signOut, useSession } from "next-auth/client";

function Checkout() {
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

  const router = useRouter();
  const [delivery, setDelivery] = useState("");

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal) + delivery;
  const [session] = useSession();

  // {!session ? 'Sign in to checkout' : "Proceed to checkOut"}

  return (
    <div>
      <Header />
      <main>
        <h1 className="text t text-2xl text-center font-bold  md:font-extrabold	">
          YOUR LUXURY WEAR CART
        </h1>
        <h1 className="text-center"></h1>
        <div className="grid grid-flow-row-dense md:grid-cols-2 mb-10 lg:grid-cols-3">
          {items.map((item, id) => (
            <CheckoutProduct
              id={id}
              key={id}
              name={item.name}
              price={item.price}
              size={item.size}
              image={item.image}
            />
          ))}
        </div>
        <div class="container"></div>
        <br />
        <br />
        <p className="text-4xl t text-center"> SUBTOTAL = N{total}</p>
        <br />
        <div className="">
          <input className="payment " type="checkbox" id="cb1" />
          <label className="lab" for="cb1">
            PAY
          </label>
        </div>{" "}
        {/* 
         <button role="link"
                    onClick={() => router.push('/Payment')}
                    className={`button btt mt-2 mb-6  font-semibold pl-5 pr-5 `}>
                    PROCEED TO PAYMENT
                </button>  */}
      </main>
    </div>
  );
}

export default Checkout;
