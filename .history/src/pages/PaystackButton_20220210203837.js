import React from 'react';

import { PaystackButton } from 'react-paystack';
import { selectItems, selectTotal } from "../slices/basketSlice";

import { useSelector } from "react-redux";

const total = useSelector(selectTotal);



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


