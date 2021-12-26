import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";
import '@fortawesome/fontawesome-free/js/all.js';
import Search from "./Search";


function JacketComp() {

    return (
        <div>
            <Search />

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
