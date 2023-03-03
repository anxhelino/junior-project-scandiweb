import { useState, useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";

const Product = ({ sku, name, price, specs, id }) => {
  const { remove } = useContext(ProductContext);
  const [deleteProduct, setDeleteProduct] = useState();

  // Select delete checkbox and updating delete product id
  const selectProduct = (e) => {
    // Select Ui checkbox when clicking containing div
    let check = e.target
      .closest(`.card`)
      .querySelector(`[name="name"]`).checked;
    e.target.closest(`.card`).querySelector(`[name="name"]`).checked = !check;

    // Updating deleteProduct returns number if is checked and string if not. Contains id of Product
    setDeleteProduct((prevState) => {
      if (e.target.closest(`.card`).querySelector(`[name="name"]`).checked) {
        return +e.target.closest(".card").id;
      } else return e.target.closest(".card").id;
    });
  };

  useEffect(() => {
    console.log(deleteProduct);
    if (typeof deleteProduct === "number") {
      remove((prev) => [...prev, +deleteProduct]);
    }

    if (typeof deleteProduct === "string") {
      remove((prev) => prev.filter((id) => id !== +deleteProduct));
    }
  }, [deleteProduct]);

  return (
    <div className="card" onClick={selectProduct} id={id}>
      <input
        onClick={(e) => (e.target.checked = !e.target.checked)}
        type="checkbox"
        name="name"
        id={id}
        className="delete-checkbox"
        style={{ width: "20px", height: "20px" }}
      />
      <div className="cardContainer">
        <p>{sku}</p>
        <p>{name}</p>
        <p>{price}$</p>
        <p>{specs}</p>
      </div>
    </div>
  );
};

export default Product;
