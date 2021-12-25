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




               
                <button
                    onClick={() => router.push('/Payment')}

                    
                >
                    (  {items.length} items)

<span>
    <Currency quantity={total} currency="GBP" /> </span> </h2>

                  PROCEED TO PAYMENT


                </button>


                {/* <div className="flex sub  ml-16 items-center bg-white shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2>Subtotal
                                (  {items.length} items)

                                <span>
                                    <Currency quantity={total} currency="GBP" /> </span> </h2>


                            <button role="link"
                                onClick={signIn} className={`button mt-2  font-semibold pl-5 pr-5 `}>
                                SIGN IN
                            </button>
                            <button
                                disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor cursor-not-allowed'}`}
                            >
                                {!session ? "signin to checkout" : "Pay with card"}


                            </button>

                        </>
                    )}
                </div> */}
            </main >
        </div >
    )
}

export default Checkout
