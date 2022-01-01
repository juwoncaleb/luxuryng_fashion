import React from 'react';
 
  import { PaystackButton } from 'react-paystack';
  import './App.css';
  
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000,
    publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
  };
  
  function App() {
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <PaystackButton {...componentProps} />
      </div>
    );
  }
  
  export default App;