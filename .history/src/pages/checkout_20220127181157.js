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

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
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
       
            <path
              d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z"
              fill="#a4bdc1"
              stroke="#323c44"
              stroke-miterlimit="10"
              stroke-width="14"
            />
            <path
              d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z"
              fill="#a4bdc1"
              stroke="#323c44"
              stroke-miterlimit="10"
              stroke-width="14"
            />
            <path
              d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z"
              fill="#7b8f91"
            />
            <path
              d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z"
              fill="#323c44"
            />
          </g>
        </svg>

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

<button onClick={() => router.push("/Payment")}>
  <div class="containerr">
    <div class="left-side">
      <div class="card">
        <div class="card-line"></div>
        <div class="buttons"></div>
      </div>
      <div class="post">
        <div class="post-line"></div>
        <div class="screen">
          <div class="dollar">$</div>
        </div>
        <div class="numbers"></div>
        <div class="numbers-line2"></div>
      </div>
    </div>
    <div class="right-side">
      <div class="new">New Transaction</div>

      <svg
        class="arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 451.846 451.847"
      >
        <path
          d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
          data-original="#000000"
          class="active-path"
          data-old_color="#000000"
          fill="#cfcfcf"
        />
      </svg>
    </div>
  </div>
</button>;
