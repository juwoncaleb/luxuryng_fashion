import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

import { useRouter } from "next/router";

function Items({ id, name, price, size, image } ) {
 
    const router = useRouter();

 
 
    const dispatch = useDispatch();
 
 
 
    const addItemToBasket =()=>{
        const product = {
            id,
           image,
            name,
            size,
            price,
        };

        dispatch(addToBasket(product))
   }
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <img  onClick={() => router.push('/Description')} src={image} height={400} width={400} objectFit="contain" className="cursor-pointer"/>
            <p className="my-3 pr-5">{name}</p>
            <p className="mb-5">{size}</p>
            <p className="mb-5"> ${price}</p>
            <button onClick={addItemToBasket} className="mt-auto bg-black"><p className="text-white pt-2"> ADD TO CART</p></button>
            
        </div>
        
    )
 

}

export default Items
