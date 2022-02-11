import React from "react";

function Payment({ name, price, count, itemSize }) {
let order = [{name}, {itemSize}, {count}].join('')
console.log(order);
L
  return (
    <div>
      <p> {name}, {itemSize}, {count} </p>
    </div>
  );
}

export default Payment;
