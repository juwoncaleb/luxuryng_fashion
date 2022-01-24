


import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut, useSession } from "next-auth/client"
import { useRouter } from "next/router";




import { selectItems, selectTotal, removeFromBasket } from "../slices/basketSlice";

import React, { useState } from "react";

function CheckoutProduct({ id, image, name, price, size }) {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)

    const [buttonColor, setButtonColor] = useState("black")
    const [font, setFont] = useState("wheat")
    const setStyle = (buttonColor, font) => {
        setButtonColor(buttonColor);
        setFont(font)
    }

    const dispatch = useDispatch()

    const [counter, setCounter] = useState(0)

    // const removeItemFromBasket = (id) => {
    //     // remove item from reudux
    //     dispatch(removeFromBasket({ id }))
    //     console.log("hh");

    // };
    const removeItemFromBasket =()=>{
       dispatch(removeFromBasket)
    }
    const [count, setCount] = useState(1)

    const [isRed, setIsRed] = useState(false)
    let btncolor = () => setIsRed(!isRed)



    const [itemSize, setItemSize] = useState("")
    const [itemSize1, setItemSize1] = useState('')



    return (
        <div>
            <div className="product">
                <Image className="" src={image} width={400} height={400} objectFit="contain" />
                <div className="items">
                    <p className="text-center relative left-3 t  checkoutText  font-extrabold	">{name} {itemSize} </p>
                    <br />
                    <p className="text-center relative left-3 t	checkoutText font-extrabold "> N {price}</p>
                    <br />
                    <div className="sizeButton">

                        <div className="relative left-32 t font-semibold inline-block	 md:left-32">
                            <label onClick={()=>{
                                    setItemSize("XL")
                                }} >
                                <input type="radio" name="radio" checked />
                                <span>XL</span>
                            </label>
                            <label onClick={()=>{
                             setItemSize("L")

                                }}>
                                <input type="radio" name="radio" checked  />
                                <span>L</span>
                            </label>
                            <label  onClick={()=>{
                             setItemSize("M")}}>
                                <input type="radio" name="radio" checked />
                                <span>M</span>
                            </label>
                            <label  onClick={()=>{
                             setItemSize("S")}}>
                                <input type="radio" name="radio" checked />
                                <span>S</span>
                            </label>
                            
                        </div>


                       
                    </div>

                    {/* COUNTER */}
                    <br />


                    <p className="text-center relative left-3 t	checkoutText font-extrabold">QUANTITY : {count}</p>
                    <br />


                    <div className="increasebutton">
                        <button className="button relative left-32	 md:left-32" onClick={() => {
                            setCount(count + 1)
                        }}> <p>+</p></button>
                        <button className="button relative left-32	 md:left-32" onClick={() => {
                            setCount(count - 1)
                        }}> <p>-</p></button>
                    </div>
                    <br />
                    <br />
                    <button className="button relative left-32 t font-semibold 	remove md:left-32" id="" onClick={removeItemFromBasket}>Remove from cart</button>

                    {/* <button className="button relative left-32 t font-semibold 	remove md:left-32" id="" onClick={() => removeItemFromBasket(id)}>Remove from cart</button> */}
                </div>


            </div>


        </div>
    )
}


export default CheckoutProduct
