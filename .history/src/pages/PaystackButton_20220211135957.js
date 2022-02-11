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
  meta : {}
};
console.log("dd");

function App() {

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
    ...config,
    text: 'Paystack Button Implementation',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
};
  const items = useSelector((state )=>{
    state.basket.rootReducer
  });
  
  return (
    <div>
      <Header />
      <PaystackButton {...componentProps} />


    </div>
  );
}

export default App;
