import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import "../sass/scss.module.css";

import {
  selectItems,
  selectTotal,
  removeFromBasket,
} from "../slices/basketSlice";

import React, { useState } from "react";

function CheckoutProduct({ id, image1, name, price, size , itemSize , }) {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const dispatch = useDispatch();


  const removeItemFromBasket = (id) => {
    // remove item from reudux
    dispatch(removeFromBasket({ id }));
  };
  const [count, setCount] = useState(1);

  const [isRed, setIsRed] = useState(false);
  let btncolor = () => setIsRed(!isRed);

  const [itemSize1, setItemSize1] = useState("");

  return (
    <div>
      <div className="product">
      <img src={image1} width={400} />

        <div className="items">
          
          <br />
          <p className="text-center relative left-3 t font-bold 	checkoutText ">
            {name} {itemSize} {count}
          </p>
          <p className="text-center relative left-3 t font-bold 	checkoutText ">
            {" "}
            {price}
          </p>

          

          {/* <button
            className="button remove relative left-32 t font-semibold 	remove md:left-32"
            id=""
            onClick={() => removeItemFromBasket(id)}
          > 
            Remove from cart
          </button>*/}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;