import React from "react";

function Payment({ name, price, count, itemSize }) {

  return (
    <div>
      <p> {name}, {itemSize}, {count} </p>
    </div>
  );
}

export default Payment;
