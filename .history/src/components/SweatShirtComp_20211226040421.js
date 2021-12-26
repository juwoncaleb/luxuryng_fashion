import Image from "next/image";
import { useState } from "react";


import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";



function SweatShirtComp ({}) {
    const [searchTerm, setSearchTerm] = useState('')


    return (
        <div class="main items-center justify-center content-center	">
        <input type="text" name="input" class="input" placeholder="Search Something....." onChange={(event) => {
            setSearchTerm(event.target.value);
        }} />

    </div>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
            {
                products.map(({id, name, price, size, image }) => {
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
export default SweatShirtComp 