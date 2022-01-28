import Image from "next/image";
import vondutch from "../product/Caps/Vondutch";
import Items from "../app/Items";
import { useState } from "react";

function CapsComp() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <form class="search-container">
        <input
          type="text"
          id="search-barrr"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <a href="#">
          <img
            class="search-icon"
            src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
          />
        </a>
      </form>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
        {vondutch
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

export default CapsComp;
