import React from "react";

function Payment({ name, price, count, itemSize }) {
let orderName = {name}
let orderName_string = JSON.stringify(orderName)
let orderItemSize = {itemSize}
let orderIte_string = JSON.stringify(orderName)
  return (
    <div>
      <p> {name}, {itemSize}, {count} </p>
    </div>
  );
}

export default Payment;
