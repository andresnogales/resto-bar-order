import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import axios from "axios";
import { useEffect, useState } from "react";
const AvailableProducts = () => {
  const [articles, setArticles] = useState([]);

  const productsList = articles.map((product) => (
    <ProductItem
      key={product._id}
      id={product._id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await axios.get("/api/articles/getallarticles")).data;
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section>
      <Card>
        <ul style={{ padding: "1rem" }}>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
