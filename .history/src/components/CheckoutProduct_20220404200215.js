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

function CheckoutProduct({ id, image1, name, price, size , itemSize , count}) {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const dispatch = useDispatch();


  const removeItemFromBasket = (id) => {
    // remove item from reudux
    dispatch(removeFromBasket({ id }));
  };

  const [isRed, setIsRed] = useState(false);
  let btncolor = () => setIsRed(!isRed);

  const [itemSize1, setItemSize1] = useState("");
  console.log(image1);

  return (
    <div>
      <div className="product">
      <img className="product_image" src={image1} width={300} />

        <div className="items">
          
          <br />
          <p className="text-center   t font-bold  ">
            {name} {itemSize} {count} <br/> {price}
          </p>
         

          

        </div>
        
       
      </div>
    </div>
  );
}

export default CheckoutProduct;