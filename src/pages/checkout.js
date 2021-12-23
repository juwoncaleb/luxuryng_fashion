import { useSelector } from "react-redux";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { signIn, signOut, useSession } from "next-auth/client"



function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal)
    const [session] = useSession();
    const redirect = () => {
        if (session) {
            onclick(console.log("we dey"))

        } else {
            onclick(signIn)

        }

    }
    {!session ? 'Sign in to checkout' : "Proceed to checkOut"}

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

                <div className="flex  bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2>Subtotal
                                (  {items.length} items)

                                <span>
                                    <Currency quantity={total} currency="GBP" /> </span> </h2>


                            <button role="link"      
                                onClick={redirect} className={`button mt-2  font-semibold pl-5 pr-5 `}>
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
