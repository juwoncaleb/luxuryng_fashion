
import Image from "next/image";

import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";


function ShoeComp() {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
        
        <div class="main items-center justify-center content-center	">
                <input type="text" name="input" class="input" placeholder="Search Something....." onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} />

            </div>{
            products.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }

            }).map(({id, name, price, size, image }) => {
                return <Items
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    size={size}
                    image={image}
                />
    
            })
        }
    </div>
    )
}

export default ShoeComp
