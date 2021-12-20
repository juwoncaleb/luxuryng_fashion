


import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import  { selectItems, selectTotal,removeFromBasket } from "../slices/basketSlice";

import React, { useState } from "react";

function CheckoutProduct({ id, image, name, price, size }) {
    const dispatch = useDispatch()

    const [counter, setCounter] = useState(0)

    const removeItemFromBasket = (id) => {
        // remove item from reudux
        dispatch(removeFromBasket({id}))
        console.log("hh");

    };
    const [count, setCount] = useState(1)

console.log(id);
   

    return (
        <div>
            <div className="product">
                <Image className="" src={image} width={400} height={400} objectFit="contain" />
                <div className="">
                    <p className="text-center relative left-3 t   font-extrabold	">{name}</p>
                    <p className="text-center relative left-3 t	 font-extrabold "> N {price}</p>

                    <button className="size relative left-32 t font-semibold	 md:left-32"> XL</button>
                    <button className="size relative left-32 font-semibold	t md:left-32"> L</button>
                    <button className="size relative left-32 t font-semibold	 md:left-32"> M</button>
                    <button className="size relative left-32	font-semibold t md:left-32"> S</button>

                    {/* COUNTER */}
                    <br/>
                    <br/>


                    <p className="text-center  relative	right-10 t font-semibold md:right-32">QUANTITY : {count}</p>

                    {/* <button className="button relative left-32	 md:left-32" onClick={() => {
                        setCount(count + 1)
                    }}> + </button>
                    <button className="button relative left-32	 md:left-32" onClick={() => {
                        setCount(count - 1)
                    }}> - </button> */}
                    <br />
                    <br />

                    <button className="button relative left-32 t font-semibold	 md:left-32" onClick= { () => removeItemFromBasket(id)}>Remove from cart</button>
                </div>


            </div>


        </div>
    )
}


export default CheckoutProduct
