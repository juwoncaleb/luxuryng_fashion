import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import removeFrombasket, { selectItems, selectTotal } from "../slices/basketSlice";



function CheckoutProduct({ id, image, name, price, size }) {


   
    const removeItemFromBasket = () => {
        // remove item from reudux
        dispatch(removeFrombasket({ id }))
    };




    return (
        <div>
            <div classNane="product">
                <Image src={image} width={400} height={400} objectFit="contain" />
                <div className="">
                    <p className="text-center	">{name}</p>
                    <p>{id}</p>
                    <p className="text-center	">{price}</p>
                    <p>{size}</p>
                    <button className="button" onClick={removeItemFromBasket}>Remove from cart</button>
                </div>


            </div>
            

        </div>
    )
}


export default CheckoutProduct
