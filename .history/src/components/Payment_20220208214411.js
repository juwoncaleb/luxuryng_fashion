import React from "react";

function Payment({ name, price, count, itemSize }) {
let orderName = {name}
let orderName_string = JSON.stringify(orderName)
let orderItemSize = {itemSize}
let orderItemSize_string = JSON.stringify(orderItemSize)
let orderCount = {count}.t
let orderCount_string = JSON.stringify(orderCount)
  return (
    <div>
      <p> {orderName_string}, {orderItemSize_string}, {orderCount_string} </p>
    </div>
  );
}

export default Payment;
