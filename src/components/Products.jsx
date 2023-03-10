import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Product from "./Product";
import ProductContext from "../context/ProductContext";
import Spinner from "./Spinner";
const Products = () => {
  const { products, setProducts, setOption, setError, setEmptyError } =
    useContext(ProductContext);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const res = await axios(
      `https://junior-test-anxhelino-ismailanji.000webhostapp.com/get.php`
    );
    const data = res.data;

    const prod = data.map((product) => {
      return {
        id: product.id,
        sku: product.sku,
        name: product.name,
        price: product.price,
        specs: product.specs,
      };
    });

    setProducts(prod);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
    setError();
    setOption();
    setEmptyError();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <main>
      <div className="cardsContainer">
        {products.length === 0 ? (
          <div className="empty">
            <h3>There are no products to display. Click Add to add one</h3>
          </div>
        ) : (
          products.map((prod) => {
            return <Product key={+prod.id} {...prod} />;
          })
        )}
      </div>
    </main>
  );
};

export default Products;
