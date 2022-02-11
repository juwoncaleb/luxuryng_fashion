import React from "react";

function Payment({ name, price, count, itemSize }) {
  console.log(name);
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default Payment;
