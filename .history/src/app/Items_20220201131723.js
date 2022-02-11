import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Items({ id, name, price, size, image, image1,  }) {
  const [active, setActive] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      image,
      name,
      size,
      price,
      image1
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
                <img src={image1} />
              </div>
              <div id="slide-2">
                <img src={image2} />
              </div>
              <div id="slide-3">
                <img src={image3} />
              </div>
              <div id="slide-4">
                <img src={image} />
              </div>
              <div id="slide-5">
                <img src={image} />
              </div>
            </div>
          </div>
          <p className=" itemsText  t font-semibold text-center display 	"></p>
          <p className="itemsText t font-semibold text-center display	">
            {" "}
            N{price}
          </p>

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
