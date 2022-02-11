import React from 'react';
import Payment from "../components/Payment";

import { PaystackButton } from 'react-paystack';
import { selectItems, selectTotal } from "../slices/basketSlice";

import { useSelector } from "react-redux";
import Items from '../app/Items';

const total = useSelector(selectTotal);

console.log(transactionDetails);
const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: {total},
  publicKey: 'pk_test_8f458dc9c4dd0fe65711942280436d087e8f5add',
  meta: {
orderName : Items.name,
orderSize : Items.itemSize,
orderCount : Items.count
  }
};
function Payment() {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
    ...config,
    text: 'Secure Online Payment ',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="App">

      <div id="containerr">
        <br/>
        <h1>&bull;PAY WITH FLUTTERWAVE &bull;</h1>
        

        <br/>

        <div id="contact_form">

         
          
          <PaystackButton  className='flutter' {...componentProps} />

        
        </div>
      </div>


    </div>
  );
}

export default Payment;


