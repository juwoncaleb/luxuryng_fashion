import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

function Items({ id, name, price, size, image }) {
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
          <input checked id="one" name="multiples" type="radio" value="1" />
          <label for="one">1</label>

          <input id="two" name="multiples" type="radio" value="2" />
          <label for="two">2</label>

          <input id="three" name="multiples" type="radio" value="3" />
          <label for="three">3</label>

          <input id="four" name="multiples" type="radio" value="4" />
          <label for="four">4</label>

          <input id="five" name="multiples" type="radio" value="5" />
          <label for="five">5</label>

          <input id="six" name="multiples" type="radio" value="6" />
          <label for="six">6</label>

          <input id="seven" name="multiples" type="radio" value="7" />
          <label for="seven">7</label>

          <input id="eight" name="multiples" type="radio" value="8" />
          <label for="eight">8</label>

          <div class="contaainer">
            <div class="carousell">
              <img className="img" src="/img/caps/vondutch/von1.pngg" alt="Landscape 1" />
              <img className="img" src="/img/caps/vondutch/von1.pngg" alt="Landscape 2" />
              <img className="img" src="/img/caps/vondutch/von1.pngg" alt="Landscape 3" />
              <img className="img" src="/img/caps/vondutch/von1.pngg" alt="Landscape 4" />
              <img src="/img/caps/vondutch/von1.pngg" alt="Landscape 5" />
              <img src="/img/caps/vondutch/von1.pngg" alt="Landscape 6" />
              <img src="/img/caps/vondutch/von1.pngg" alt="Landscape 7" />
              <img src="/img/caps/vondutch/von1.pngg" alt="Landscape 8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
