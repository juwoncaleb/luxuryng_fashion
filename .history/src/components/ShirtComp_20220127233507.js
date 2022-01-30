import Image from "next/image";

import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";
import { useState } from "react";

function ShirtComp({}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div id="container">
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          type="search"
          placeholder="Search"
        />

        <div class="cell">
          <div class="button">Search</div>
        </div>
      </div>
      <form onsubmit="event.preventDefault();" role="search">
        <label for="search">Search for stuff</label>
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          id="search"
          type="search"
          placeholder="Search..."
          autofocus
          required
        />
        <button type="submit">Go</button>
      </form>

      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
        {products
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map(({ id, name, price, size, image }) => {
            return (
              <Items
                key={id}
                id={id}
                name={name}
                price={price}
                size={size}
                image={image}
              />
            );
          })}
      </div>
    </div>
  );
}
export default ShirtComp;
