import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import CheckoutProduct from "../components/CheckoutProduct";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Items({ id, name, price, size, image1, image2, image3 }) {
  const [color, setColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [active, setActive] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [count, setCount] = useState(0);
  const order = console.log(name, itemSize);

  const router = useRouter();
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    console.log(image1);
    console.log(itemSize);
    console.log(count);

    const product = {
      id,
      image1,
      name,
      size,
      price,
      itemSize,
      count,
    };
    setActive("active");
    dispatch(addToBasket(product));
  };

  return (
    <div className="w-screen">

      <div className="itemContainer w-full	 flex-col m-0 md:m-5 bg-white z-30 p-10">
        <div className=" flex flex-col w-full m-0 md:m-5 bg-white z-30 p-10">
          <div className="bg-gray">
          <Carousel
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={100}
            useKeyboardArrows={true}
            stopOnHover={false}
            autoPlay
            infiniteLoop
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            interval={4000}
          ><Carousel></Carousel>
            <div className=" flex priceName  ">
              <div className="itemName">{name}</div>
              <span>{itemSize}</span> {count}
              <div className="itemPrice">{price}</div>
            </div>
            <div class="itt flex ">
              <div className="flex itemmSize mt-2">
                <p
                  onClick={() => {
                    setItemSize("XL");
                  }}
                  className="xl cursor-pointer"
                >
                  XL
                </p>
                <p
                  onClick={() => {
                    setItemSize("L");
                  }}
                  className="l cursor-pointer"
                >
                  L
                </p>
                <p
                  onClick={() => {
                    setItemSize("M");
                  }}
                  className="m cursor-pointer"
                >
                  M
                </p>
                <p
                  onClick={() => {
                    setItemSize("S");
                  }}
                  className="s cursor-pointer"
                >
                  S
                </p>
              </div>

              <div className="flex quantit mt-2">
                <p onClick={()=>{
                  setCount(count + 1 )
                }} className="increasePlus cursor-pointer">+</p>
                <p onClick={()=>{
                  setCount(count - 1 )
                }} className="decreaseMinus cursor-pointer">-</p>
              </div>
              <p
                onClick={() => {
                  setColor("white");
                  setBackgroundColor("red");
                  addItemToBasket()
                }}
                style={{ color: color, backgroundColor: backgroundColor }}
                className="mt-2 cursor-pointer"
              >
                Add to Cart{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
