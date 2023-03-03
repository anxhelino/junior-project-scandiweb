import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const ProductHeader = () => {
  const { handleSubmit, setOption, setError, setEmptyError } =
    useContext(ProductContext);

  return (
    <header>
      <div className="title">
        <h1>Product Add</h1>
      </div>
      <div className="buttons">
        <button id="save" onClick={handleSubmit}>
          SAVE
        </button>
        <Link
          to="/"
          id="delete-product-btn"
          onClick={() => {
            setError();
            setOption();
            setEmptyError();
          }}
        >
          Cancel
        </Link>
      </div>
    </header>
  );
};

export default ProductHeader;
