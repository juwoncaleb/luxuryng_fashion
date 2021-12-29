import { useSelector } from "react-redux";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useRouter } from "next/router";

import { signIn, signOut, useSession } from "next-auth/client"

function Checkout() {
    const router = useRouter();

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal)
    const [session] = useSession();

    // {!session ? 'Sign in to checkout' : "Proceed to checkOut"}

    return (
        <div >
            <Header />
            <main >

                <h1 className="text-center">YOUR LUXURY WEAR CART</h1>

                <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, id) => (
                        <CheckoutProduct
                            id={id}
                            key={id}
                            name={item.name}
                            price={item.price}
                            size={item.size}
                            image={item.image}
                        />
                    ))}
                </div>
                <br />
                <br />
                <br />


                <button role="link"
                    onClick={() => router.push('/TestPayment')}
                    className={`button btt mt-2 mb-6  font-semibold pl-5 pr-5 `}>
                    PROCEED TO PAYMENT
                </button>


                {/* <button role="link"
                    onClick={() => router.push('/Payment')}
                    className={`button btt mt-2 mb-6  font-semibold pl-5 pr-5 `}>
                    PROCEED TO PAYMENT
                </button> */}


               
            </main >
        </div >
    )
}

export default Checkout
