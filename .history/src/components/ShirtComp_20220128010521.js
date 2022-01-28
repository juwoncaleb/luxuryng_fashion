import Image from "next/image";

import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";
import { useState } from "react";

function ShirtComp({}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
         <form class="search-container">
    <input type="text" id="search-bar" placeholder="What can I help you with today?"/>
    <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
  </form>
        
      <div class="contaainer">
        <div class="search-box">
          <input
            type="text"
            class="search-input"
            placeholder="Search.."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />

          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
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
