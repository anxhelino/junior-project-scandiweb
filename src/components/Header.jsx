import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const Header = () => {
  const { handleDeleteProducts } = useContext(ProductContext);

  const deleteProduct = () => {
    const card = document.querySelectorAll("input");
    const id = [];
    card.forEach((card) => {
      if (card.checked === true) {
        id.push(+card.id);
      }
    });
    handleDeleteProducts(id);
  };

  return (
    <header>
      <div className="title">
        <h1>Product</h1>
      </div>
      <div className="buttons">
        <Link to="/add-product">ADD</Link>
        <button id="delete-product-btn" onClick={deleteProduct}>
          MASS DELETE
        </button>
      </div>
    </header>
  );
};

export default Header;
