import Image from "next/image";
import vondutch from "../product/Caps/Vondutch";
import Items from "../app/Items";

function CapsComp() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <div className="search">


                <form class="form-search" method="get" action="#">
                    <input type="search" name="search" placeholder="" onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                    <button type="submit">Search</button>

                </form>

            </div>
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
                {
                    vondutch.filter((val) => {
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

export default CapsComp
