import jacket from "../product/jacket/jacket";
import Items from "../app/Items";
import { useState } from "react";
import "@fortawesome/fontawesome-free/js/all.js";

function Swe() {
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

      =

      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
        {jacket
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map(({ id, name, price, size, image1 }) => {
            return (
              <Items
                key={id}
                id={id}
                name={name}
                price={price}
                size={size}
                image1={image1}
              />
            );
          })}
      </div>
    </div>
  );
}

export default JacketComp;
