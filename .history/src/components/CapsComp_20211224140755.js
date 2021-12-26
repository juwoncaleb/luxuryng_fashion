import Image from "next/image";
import vondutch from "../product/Caps/Vondutch";
import Items from "../app/Items";

function CapsComp() {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
        {
            vondutch.map(({id, name, price, size, image }) => {
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

export default CapsComp
