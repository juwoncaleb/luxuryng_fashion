import React from "react";
import { PaystackButton } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 20000,
  publicKey: "pk_test_dsdfghuytfd2345678gvxxxxxxxxxx",
};
console.log("ll");
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
