import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductContext = createContext();
const selectProduct = {
  Book: {
    weight: "",
  },
  DVD: {
    size: "",
  },
  Furniture: {
    height: "",
    width: "",
    length: "",
  },
};

export const ProductContextProvider = ({ children }) => {
  // products do delete
  const [toDelete, setToDelete] = useState([]);
  // set product type
  const [option, setOption] = useState();
  const [error, setError] = useState();
  const [emptyError, setEmptyError] = useState();
  const [products, setProducts] = useState([{}]);
  // products to add
  const [input, setInput] = useState({
    sku: "",
    name: "",
    price: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    // Reset input on Product type change
    setInput((input) => {
      const { weight, size, height, width, length, ...rest } = input;
      return rest;
    });
    // set input fields on product type change

    setInput((input) => ({ ...input, option, ...selectProduct[option] }));
  }, [option]);

  //getProducts

  // set products
  const handleSubmit = async () => {
    //check if input is empty
    const isEmptyInput = Object.values(input).some(
      (input) => input === "" || input === " "
    );
    if (isEmptyInput) {
      setEmptyError("Please fill all required inputs");
      return;
    }
    // reset switcher errror
    setError();
    if (!option) {
      setError("Please select an Product type option");
      return;
    }
    // check for name validation
    if (+input.name) {
      setEmptyError("Name field must be text!");
      return;
    }
    // Check if sku is already registered
    if (products.some((prod) => prod.sku === input.sku)) {
      setEmptyError("This id already taken please type another");
      return;
    }

    //send post request

    axios
      .post(
        `https://junior-test-anxhelino-ismailanji.000webhostapp.com/post.php`,
        JSON.stringify(input)
      )
      .then((res) => {
        console.log(res.data);
      });

    // reset all input and errors
    navigate("/");
    setInput({
      sku: "",
      name: "",
      price: "",
    });
    setOption();
    setEmptyError();
  };

  //Delete products
  const handleDeleteProducts = () => {
    axios
      .post(
        `https://junior-test-anxhelino-ismailanji.000webhostapp.com/delete.php`,
        JSON.stringify(toDelete)
      )
      .then((res) => {
        console.log(res.data);
      });

    setProducts((prev) => {
      return prev.filter((prod) => !toDelete.includes(+prod.id));
    });
  };

  return (
    <ProductContext.Provider
      value={{
        remove: setToDelete,
        handleSubmit: handleSubmit,
        addProduct: setInput,
        setOption: setOption,
        setProducts: setProducts,
        handleDeleteProducts: handleDeleteProducts,
        products: products,
        input: input,
        option: option,
        error: error,
        emptyError: emptyError,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;