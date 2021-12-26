import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";
import { useState } from "react";
import '@fortawesome/fontawesome-free/js/all.js';
import Search from "./Search";


function JacketComp() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <div class="main items-center justify-center content-center	">
                <input type="text" name="input" class="input" placeholder="Search Something....." onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} />
                
            </div>
            {/* <div className="search">


                <form class="form-search" method="get" action="#">
                    <input type="search" name="search" placeholder="" />
                    <button type="submit">Search</button>

                </form>

            </div> */}




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
}

export default JacketComp
