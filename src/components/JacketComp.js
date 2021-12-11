import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";

function JacketComp() {
    return (
        <div>
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
            
        </div>
    )
}

export default JacketComp
