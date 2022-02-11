import React from "react";

function Payment({ name, price, count, itemSize }) {

  return (
    <div>
      <p> {name}, {orderItemSize_string}, {orderCount_string} </p>
    </div>
  );
}

export default Payment;
