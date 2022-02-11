import React from "react";

function Pay ({ name, price, count, itemSize }) {

  return (
    <div>
      <p> {name}, {itemSize}, {count} </p>
    </div>
  );
}

export default Pay;
