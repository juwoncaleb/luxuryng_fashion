import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Items({ id, name, price, size, image, original, thumbnail }) {
  const [active, setActive] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [count, setCount] = useState(0);

  const router = useRouter();
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      image,
      name,
      size,
      price,
    };
    setActive("active");
    dispatch(addToBasket(product));
  };

  return (
    <div className="w-screen">
      <div className=" w-full	 flex-col m-0 md:m-5 bg-white z-30 p-10">
        <div className="relative flex flex-col w-full m-0 md:m-5 bg-white z-30 p-10">
          <div class="sliderrr">
            <div class="slides">
              <img
                id="slide-1"
                src={image}
                objectFit="contain"
                className="cursor-pointer images"
              />
              <div>
                <img src={image} />
              </div>
              <div id="slide-2">
                <img src={image} />
              </div>
              <div id="slide-3">
                <img src={image} />
              </div>
              <div id="slide-4">
                <img src={image} />
              </div>
              <div id="slide-5">
                <img src={image} />
              </div>
            </div>
          </div>
          <p className=" itemsText  t font-semibold text-center display 	">
            {name} {itemSize} ----- x {count}
          </p>
          {/* <p className="Quatity t font-semibold display "> QUANTITY : {count}</p> */}

          <p className="itemsText t font-semibold text-center display	">
            {" "}
            N{price}
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
                    setItemSize("XXL");
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

          <div className="increasebutton">
            <button
              className=" relative left-32	 md:left-32"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              {" "}
              <p>+</p>
            </button>
            <button
              className="q relative left-32	 md:left-32"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              {" "}
              <p>-</p>
            </button>
          </div>
          
          <button
            onClick={addItemToBasket}
            className={`but mb-10 ml-0 md:ml-10 ${active} `}
          >
            <p id="btnText">Add to cart</p>
            <div class="check-box">
              <svg
                style={{
                  style: 3,
                  stroke: "white",
                  strokeDasharray: 34,
                  strokeDashoffset: 34,
                  strokeLinecap: "round",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
