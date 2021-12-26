import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";


import { useRouter } from "next/router";

function Items({ id, name, price, size, image }) {

    
      
   

    const [active, setActive] = useState('')


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
setActive('active')
        dispatch(addToBasket(product))
    }
   
   

    return (
        <div className="relative">

            <div className="  flex-col  bg-white  ">

                <img src={image} height={400} width={400} objectFit="contain" className="cursor-pointer" />
                <p className=" itemsText  t font-semibold text-center display	">{name}</p>
                <p className="itemsText t font-semibold text-center display	"> N{price}</p>


                <button onClick={addItemToBasket} className={`but ml-10 ${active} `}>
                    <p id="btnText">Add to cart</p>
                    <div class="check-box">
                        <svg style={{ style: 3, stroke: "white", strokeDasharray: 34, strokeDashoffset: 34, strokeLinecap: "round" }}
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                </button>

            </div>

        </div>




    )
}

export default Items