import Image from "next/image";

import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";
import { useState } from "react";

function ShirtComp({}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      
      <div class="search__container">
    <p class="search__title">
        Go ahead, hover over search
    </p>
    <input class="search__input" type="text" placeholder="Search">
</div>
      <form className="foor" onsubmit="event.preventDefault();" role="search">
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
        <button className="submit" type="submit">Go</button>
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
