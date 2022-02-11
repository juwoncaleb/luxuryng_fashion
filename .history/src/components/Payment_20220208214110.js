import React from "react";

function Payment({ name, price, count, itemSize }) {
let orderName = {name}
let orderName_string = JSON.stringify()
  return (
    <div>
      <p> {name}, {itemSize}, {count} </p>
    </div>
  );
}

export default Payment;
