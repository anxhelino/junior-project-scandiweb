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
        <Link to="/" id="cancel">
          Cancel
        </Link>
      </div>
    </header>
  );
};

export default ProductHeader;
