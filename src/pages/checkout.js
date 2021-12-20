import { useSelector } from "react-redux";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import  { selectItems, selectTotal } from "../slices/basketSlice";
import { useSession } from "next-auth/client";
import Currency from "react-currency-formatter";


function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal)
    const [session] = useSession();
    const createCheckOutSession =()=>{

    }

    return (
        <div >
            <Header />
            <main >
                


                <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, id) => (
                        <CheckoutProduct
                        id ={id}
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


                        <button role="link" onClick={createCheckOutSession} disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                            {!session ? 'Sign in to checkout' : "Proceed to checkOut"}
                        </button>
                    </>
                )}
            </div>
            </main>
        </div>
    )
}

export default Checkout
