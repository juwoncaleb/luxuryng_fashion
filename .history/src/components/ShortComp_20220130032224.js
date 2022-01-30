import products from "../product/MenShoes/MenShoes";
import Items from "../app/Items";

function ShortComp() {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
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
      {products.map(({ id, nam price, size, image , original, thumbnail }) => {
        return (
          <Items
          key={id}
          name={name}
          price={price}
          size={size}
          image={image}
          original={original}
          thumbnail={thumbnail}
          />
        );
      })}
    </div>
  );
}

export default ShortComp;
