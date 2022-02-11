import React from "react";

function Payment({ name, price, count, itemSize }) {
let orderName = {name}
let orderName_
  return (
    <div>
      <p> {name}, {itemSize}, {count} </p>
    </div>
  );
}

export default Payment;
