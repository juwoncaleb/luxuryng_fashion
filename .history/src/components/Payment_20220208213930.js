import React from "react";

function Payment({ name, price, count, itemSize }) {
let order = [{name}, {itemSize}, {count}].join('')
console.log(order);
Let 
  return (
    <div>
      <p> {name}, {itemSize}, {count} </p>
    </div>
  );
}

export default Payment;
