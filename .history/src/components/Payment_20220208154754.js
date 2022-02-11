import React from "react";

function Payment({ name, price, count, itemSize }) {
  let order = [{name}, {itemSize}, {count}] 
  console.log(name);
  return (
    <div>
      <p>[... ]</p>
    </div>
  );
}

export default Payment;
