import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Product from "./Product";
import ProductContext from "../context/ProductContext";
import Spinner from "./Spinner";
const Products = () => {
  const [loading, setLoading] = useState(false);
  const { products, setProducts } = useContext(ProductContext);
  const getProducts = async () => {
    setLoading(true);
    const res = await axios(`http://localhost:8888/server/get.php`);
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
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      <div className="cardsContainer">
        {products.map((prod) => {
          return <Product key={+prod.id} {...prod} />;
        })}
      </div>
    </main>
  );
};

export default Products;
