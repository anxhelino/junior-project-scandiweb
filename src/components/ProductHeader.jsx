import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const ProductHeader = () => {
  const { handleSubmit } = useContext(ProductContext);

  return (
    <header>
      <div className="title">
        <h1>Product Add</h1>
      </div>
      <div className="buttons">
        <button id="save" onClick={handleSubmit}>
          SAVE
        </button>
        <Link to="/" id="delete-product-btn">
          Cancel
        </Link>
      </div>
    </header>
  );
};

export default ProductHeader;
