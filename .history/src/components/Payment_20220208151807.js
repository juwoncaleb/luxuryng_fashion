import React from "react";

function Payment({ name, price, count, itemSize }) {
  let order = {}
  console.log(name);
  return (
    <div>
      <p>{name} - {itemSize}- {count}</p>
    </div>
  );
}

export default Payment;
