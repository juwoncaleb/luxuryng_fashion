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
  const [session] = useSession();
  let Order = () => {
    items.map((item, id) => {
      <Payment name={item.name} itemSize={item.itemSize} />;
    });
    return <Payment/>
  };
  let j = Order()
  console.log();
  return (
    <div>
      <Header />
        <h1 className="text t text-2xl text-center font-bold  md:font-extrabold	">
          YOUR LUXURY WEAR CART
        </h1>
        <h1 className="text-center"></h1>
        
        <br />
        <br />


            

            
              `${console.log(items)}`

              
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Checkout;
