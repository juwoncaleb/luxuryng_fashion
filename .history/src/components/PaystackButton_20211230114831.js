import React from 'react';
 
  import { PaystackButton } from 'react-paystack';
 
  
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000,
    publicKey: 'pk_test_8f458dc9c4dd0fe65711942280436d087e8f5add',
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
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return (
      <div className="App">
        



        <PaystackButton className='' {...componentProps} />
      </div>
    );
  }
  
  export default Payment;


 