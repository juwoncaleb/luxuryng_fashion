import Image from "next/image";
import { useState } from "react";

import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";

function ShoeComp() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div class="block">
        <input
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          placeholder="SEARCH"
          class="input-res"
        />
      </div>
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
              name={name}
              price={price}
              size={size}
              image={image}
              original={original}
              thumbnail={thumbnail}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ShoeComp;
