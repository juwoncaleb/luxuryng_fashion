import Image from "next/image";
import kaki from "../product/kaki/kaki";
import Items from "../app/Items";
import { useState } from "react";

function CapsComp() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
     <div class="block">
       <br/>
       <br/>b

     <h1>Jeans</h1>

      </div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
        {kaki
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map(({ id, name, price, size, image1, image2, image3 }) => {
            return (
              <Items
                key={id}
               
                name={name}
                price={price}
                size={size}
                image1={image1}
                image2={image2}
                image3={image3}


              />
            );
          })}
      </div>
    </div>
  );
}

export default CapsComp;
