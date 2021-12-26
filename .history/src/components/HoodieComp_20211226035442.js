
import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";
import { useState } from "react";


function HoodieComp() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <div class="main items-center justify-center content-center	">
                <input type="text" name="input" class="input" placeholder="Search Something....." onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} />

            </div>
            <div>
                <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
                    {
                        products.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
    
                        }).map(({ id, name, price, size, image }) => {
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

            </div>
            )
        </div>
}

export default HoodieComp
