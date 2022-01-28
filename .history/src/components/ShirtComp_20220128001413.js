import Image from "next/image";

import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";
import { useState } from "react";

function ShirtComp({}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
        <form class="search" action="">
  <input  type="search" placeholder="Search here..." required/>
  <button type="submit">Search</button>
</form>   
      <form id="form" role="search">
        <input
        
          type="search"
          id="query"
          name="q"
          placeholder="Search..."
          aria-label="Search through site content"
        />
        <button>Search</button>
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
