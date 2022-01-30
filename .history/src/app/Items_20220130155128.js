import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Items({ id, name, price, size, image, original, thumbnail }) {
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
              <div id="slide-1">1</div>
              <div id="slide-2">2</div>
              <div id="slide-3">3</div>
              <div id="slide-4">4</div>
              <div id="slide-5">5</div>
            </div>

          </div>
          <p className=" itemsText  t font-semibold text-center display 	"></p>
          <p className="itemsText t font-semibold text-center display	">
            {" "}
            N{price}
          </p>

        </div>
      </div>
    </div>
  );
}

export default Items;
