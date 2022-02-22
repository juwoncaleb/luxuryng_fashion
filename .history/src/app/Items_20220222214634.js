import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CheckoutProduct from "../components/CheckoutProduct";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Items({ id, name, price, size, image1, image2, image3 }) {
  const [ color, setColor ] = useState('white');
  const [ backgroundColor, setBackgroundColor ] = useState('black')
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
            <div class="sliderrr ">
              <div class="slides">
                <div id="slide-1">
                  <img src={image1} />
                </div>
                <div id="slide-2">
                  <img src={image2} />
                </div>
                <div id="slide-3">
                  <img src={image3} />
                </div>
              </div>
            </div>
            <div className=" flex priceName  ">
              <div className="itemName">{name}</div>
              {itemSize}x{count}
              <div className="itemPrice">{price}</div>
            </div>
            <div class="itt flex ">
              <div className="flex itemmSize">
                <p className="xl">XL</p>
                <p className="l">L</p>
                <p className="m">M</p>
                <p className="s">S</p>
              </div>
              
              <div className="flex quantit">
                <p className="increasePlus">+</p>
                <p className="decreaseMinus">-</p>
              </div>
              <p onClick={()=>{
                setCol
              }} style={{ 'color': color, 'backgroundColor': backgroundColor }} className="">Add to Cart </p>
            </div>
            
   
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
