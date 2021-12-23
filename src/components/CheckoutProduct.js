


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
    const setStyle = (buttonColor , font)=>{
     setButtonColor(buttonColor);
     setFont(font)   
    }

    const dispatch = useDispatch()

    const [counter, setCounter] = useState(0)

    const removeItemFromBasket = (id) => {
        // remove item from reudux
        dispatch(removeFromBasket({ id }))
        console.log("hh");

    };
    const [count, setCount] = useState(1)

    const [isRed, setIsRed]= useState(false)
    let btncolor = () => setIsRed(!isRed)
    


    

    

    return (
        <div>
            <div className="product">
                <Image className="" src={image} width={400} height={400} objectFit="contain" />
                <div className="items">
                    <p className="text-center relative left-3 t  checkoutText  font-extrabold	">{name} </p>
                    <br />
                    <p className="text-center relative left-3 t	checkoutText font-extrabold "> N {price}</p>
                    <br />
                   <div className="sizeButton">
                   <button className="size relative left-32 t font-semibold	 md:left-32" style={isRed ? {backgroundColor: 'red'} : {backgroundColor: 'black'}}
                    onClick={btncolor } > XL</button>
                    <button className="size relative left-32 font-semibold	t md:left-32"  > L</button>
                    <button className="size relative left-32 t font-semibold	 md:left-32" > M</button>
                    <button className="size relative left-32	font-semibold t md:left-32"> S</button>

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

                    <button className="button relative left-32 t font-semibold 	 md:left-32" id="cart" onClick={() => removeItemFromBasket(id)}>Remove from cart</button>
                </div>


            </div>


        </div>
    )
}


export default CheckoutProduct
