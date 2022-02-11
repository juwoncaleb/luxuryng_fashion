import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { PaystackButton } from 'react-paystack';

let config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 20000,
  publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
  
};
console.log("dd");

function App() {

 

  const componentProps = {
    ...config,
    text: 'Paystack Button Implementation',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
};
  const items = useSelector(selectItems);
  
  return (
    <div>
      <Header />
      <PaystackButton {...componentProps} />

      `${console.log("JJ")}`

    </div>
  );
}

export default App;
