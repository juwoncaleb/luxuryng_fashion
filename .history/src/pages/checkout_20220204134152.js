import React,{ useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useRouter } from "next/router";

import { signIn, signOut, useSession } from "next-auth/client";

function Checkout() {
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

  const router = useRouter();
  const [delivery, setDelivery] = useState("");

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal) + delivery ;
  const [session] = useSession();

  

  // {!session ? 'Sign in to checkout' : "Proceed to checkOut"}

  return (
    <div>
      <Header />
      <main>
        <h1 className="text t text-2xl text-center font-bold  md:font-extrabold	">
          YOUR LUXURY WEAR CART
        </h1>

        <h1 className="text-center"></h1>

        <div className="grid grid-flow-row-dense md:grid-cols-2 mb-10 lg:grid-cols-3">
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
        <h1>SELECT DELIVERY LOCATION</h1>
        <div class="container">
  <div class="plans">
    <div class="title">Choose a pricing plan</div>
    <label class="plan basic-plan" for="basic">
      <input checked type="radio" name="plan" id="basic" />
      <div class="plan-content">
        <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
        <div class="plan-details">
          <span>Basic</span>
          <p>For smaller business, with simple salaries and pay schedules.</p>
        </div>
      </div>
    </label>

    <label class="plan complete-plan" for="complete">
      <input type="radio" id="complete" name="plan" />
      <div class="plan-content">
        <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/potted-plant-img.svg" alt="" />
        <div class="plan-details">
          <span>Complete</span>
          <p>For growing business who wants to create a rewarding place to work.</p>
        </div>
      </div>
    </label>
    <label class="plan basic-plan" for="basic">
      <input checked type="radio" name="plan" id="basic" />
      <div class="plan-content">
        <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
        <div class="plan-details">
          <span>Basic</span>
          <p>For smaller business, with simple salaries and pay schedules.</p>
        </div>
      </div>
    </label>

    <label class="plan complete-plan" for="complete">
      <input type="radio" id="complete" name="plan" />
      <div class="plan-content">
        <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/potted-plant-img.svg" alt="" />
        <div class="plan-details">
          <span>Complete</span>
          <p>For growing business who wants to create a rewarding place to work.</p>
        </div>
      </div>
    </label>
  </div>
</div>

        <br />
        <br />
        <p className="text-4xl t text-center"> SUBTOTAL = N{total}</p>
        <br />

        <input type="checkbox" id="cb1" /><label for="cb1"></label>
        {/* 
         <button role="link"
                    onClick={() => router.push('/Payment')}
                    className={`button btt mt-2 mb-6  font-semibold pl-5 pr-5 `}>
                    PROCEED TO PAYMENT
                </button>  */}
      </main>
    </div>
  );
}

export default Checkout;
