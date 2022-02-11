import React from "react";

function Payment({ name, price, count, itemSize }) {
let order = [[{name}], {itemSize}, {count}]

console.log(order);
  return (
    <div>
      <p> {order} </p>
    </div>
  );
}

export default Payment;
