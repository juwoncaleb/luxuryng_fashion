import Image from "next/image";

import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";
import { useState } from "react";

function ShirtComp({}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
<div class="container">
   <div class="search-box">
      <input type="text" class="search-input" placeholder="Search.." onChange={(event) => {
            setSearchTerm(event.target.value);
          }}/>

      <button class="search-button">
        <i class="fas fa-search"></i>
      </button>
   </div>
</div>



      
        <button id="button">
          <i class="fa fa-search"></i>
        </button>
        <div class="spinner">
          <i class="fa fa-spinner"></i>
        </div>
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
