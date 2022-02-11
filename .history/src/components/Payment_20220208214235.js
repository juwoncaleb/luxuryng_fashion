import React from "react";

function Payment({ name, price, count, itemSize }) {
let orderName = {name}
let orderName_string = JSON.stringify(orderName)
let orderItemSize = {itemSize}
let orderItemSize_string = JSON.stringify(orderItemSize)
let orderCount = {itemSize}
let orderItemSize_string = JSON.stringify(orderItemSize)
  return (
    <div>
      <p> {name}, {itemSize}, {count} </p>
    </div>
  );
}

export default Payment;
