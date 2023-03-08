import { AiOutlineArrowDown } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import ProductContext from "../context/ProductContext";

const ProductDescription = ({ option, handleChange, input }) => {
  if (option === "DVD") {
    return (
      <div id={option} className="productDescription">
        <label htmlFor="size">
          Size (MB)
          <input
            value={input.size}
            onChange={handleChange}
            type="number"
            required
            id="size"
            placeholder="DVD size MB"
          />
        </label>
        <p>Please provide the size in MB of the DVD</p>
      </div>
    );
  }
  if (option === "Book") {
    return (
      <div id={option} className="productDescription">
        <label htmlFor="weight">
          Weight (KG)
          <input
            value={input.weight}
            onChange={handleChange}
            required
            type="number"
            id="weight"
            placeholder="Book Weight in KG"
          />
        </label>
        <p>Please provide the weight of the book</p>
      </div>
    );
  }

  if (option === "Furniture") {
    return (
      <div id={option} className="productDescription">
        <label htmlFor="height">
          Height (CM)
          <input
            value={input.height}
            onChange={handleChange}
            required
            type="number"
            id="height"
            placeholder="Furniture Height CM"
          />
        </label>
        <label htmlFor="width">
          Width (CM)
          <input
            value={input.width}
            onChange={handleChange}
            required
            type="number"
            id="width"
            placeholder="Furniture Width CM"
          />
        </label>
        <label htmlFor="length">
          Length (CM)
          <input
            value={input.length}
            onChange={handleChange}
            required
            type="number"
            id="length"
            placeholder="Furniture Length CM"
          />
        </label>
        <p>Please provide dimensions in HxWxL format</p>
      </div>
    );
  }
};

const ProductForm = () => {
  const [showDropbox, setShowDropbox] = useState(false);
  const {
    addProduct,
    input,
    setOption,
    option,
    error,
    emptyError,
    handleSubmit,
  } = useContext(ProductContext);

  const toggleDropBox = (e) => {
    e.preventDefault();
    setShowDropbox(!showDropbox);
  };

  // handle input change
  const handleChange = (e) => {
    let id = e.target.id;
    const value = e.target.value;

    addProduct((values) => {
      return { ...values, [id]: value };
    });
  };

  return (
    <div className="formContainer">
      {emptyError ? <p className="error">*{emptyError}</p> : ""}
      <form action="post" id="product_form">
        <div className="regularForm">
          <label htmlFor="sku">
            SKU
            <input
              required
              type="text"
              value={input.sku}
              id="sku"
              placeholder="Unique Product ID"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="name">
            NAME
            <input
              onChange={handleChange}
              required
              value={input.name}
              type="text"
              id="name"
              placeholder="Product Name"
            />
          </label>
          <label htmlFor="price">
            PRICE($)
            <input
              value={input.price}
              required
              type="number"
              id="price"
              placeholder="Product Price"
              onChange={handleChange}
            />
          </label>
        </div>
        {error ? <p className="error">*{error}</p> : ""}
        <div className="dropdown">
          <label for="productType">Product Type Switcher:</label>

          <select
            id="productType"
            onChange={(e) => {
              if (e.target.value === "Product Type") {
                setOption();
                return;
              }
              setOption(e.target.value);
            }}
          >
            <option value="Product Type">Product Type</option>
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>

        {/* <div className="dropdown">
          <span>Product Type Switcher</span>
          <button className="dropbtn" onClick={toggleDropBox}>
            {option || "Dropdown"}{" "}
            <i>
              <AiOutlineArrowDown />
            </i>
          </button>
          <div id="productType" className={`dropdown-content show`}>
            <p
              onClick={() => {
                setOption("DVD");
                setShowDropbox(false);
              }}
              id="DVD"
            >
              DVD
            </p>
            <p
              onClick={() => {
                setOption("Book");
                setShowDropbox(false);
              }}
              id="Book"
            >
              Book
            </p>
            <p
              onClick={() => {
                setOption("Furniture");
                setShowDropbox(false);
              }}
              id="Furniture"
            >
              Furniture
            </p>
          </div>
        </div> */}
        <div>
          <ProductDescription
            option={option}
            input={input}
            handleChange={handleChange}
          />
        </div>
        <button id="save" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
