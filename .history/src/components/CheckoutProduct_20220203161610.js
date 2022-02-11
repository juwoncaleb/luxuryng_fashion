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

function CheckoutProduct({ id, fr, name, price, size }) {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const [buttonColor, setButtonColor] = useState("black");
  const [font, setFont] = useState("wheat");
  const setStyle = (buttonColor, font) => {
    setButtonColor(buttonColor);
    setFont(font);
  };

  const dispatch = useDispatch();

  const [counter, setCounter] = useState(0);

  const removeItemFromBasket = (id) => {
    // remove item from reudux
    dispatch(removeFromBasket({ id }));
    console.log("hh");
  };
  const [count, setCount] = useState(1);

  const [isRed, setIsRed] = useState(false);
  let btncolor = () => setIsRed(!isRed);

  const [itemSize, setItemSize] = useState("");
  const [itemSize1, setItemSize1] = useState("");

  return (
    <div>
      <div className="product">
        <Image
          className=""
          src={image}
          width={400}
          height={400}
          objectFit="contain"
        />
        <div className="items">
          <p className="text-center relative left-3 t  checkoutText  	">
            {name} {itemSize}{" "}
          </p>
          <br />
          <p className="text-center relative left-3 t	checkoutText ">
            {" "}
            N {price}
          </p>
          <div id="form-wrapper">
            <form action="/p/quote.php" method="GET" className="option">
              <div className="debt-amount-slider">
                <input
                  type="radio"
                  name="debt-amount"
                  id="1"
                  value="1"
                  required
                />
                <label
                  for="1"
                  data-debt-amount="XXL"
                  onClick={() => {
                    setItemSize("XCL");
                  }}
                ></label>
                <input
                  type="radio"
                  name="debt-amount"
                  id="2"
                  value="2"
                  required
                />
                <label
                  for="2"
                  data-debt-amount="XL"
                  onClick={() => {
                    setItemSize("XL");
                  }}
                ></label>
                <input
                  type="radio"
                  name="debt-amount"
                  id="3"
                  value="3"
                  required
                />
                <label
                  for="3"
                  data-debt-amount="L"
                  onClick={() => {
                    setItemSize("L");
                  }}
                ></label>
                <input
                  type="radio"
                  name="debt-amount"
                  id="4"
                  value="4"
                  required
                />
                <label
                  for="4"
                  data-debt-amount="M"
                  onClick={() => {
                    setItemSize("M");
                  }}
                ></label>
                <input
                  type="radio"
                  name="debt-amount"
                  id="5"
                  value="5"
                  required
                />
                <label
                  for="5"
                  data-debt-amount="S"
                  onClick={() => {
                    setItemSize("S");
                  }}
                ></label>
                <div id="debt-amount-pos"></div>
              </div>
            </form>
          </div>

          {/* COUNTER */}
          <br />

          <p className="text-center relative left-3 t	checkoutText font-extrabold" id="checkText">
            QUANTITY : {count}
          </p>
          <br />

          <div className="increasebutton">
            <button
              className="button relative left-32	 md:left-32"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              {" "}
              <p>+</p>
            </button>
            <button
              className="button relative left-32	 md:left-32"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              {" "}
              <p>-</p>
            </button>
          </div>
          <br />
          <br />

          <button
            className="button remove relative left-32 t font-semibold 	remove md:left-32"
            id=""
            onClick={() => removeItemFromBasket(id)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
