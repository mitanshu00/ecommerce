import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useCallback, useState, useEffect } from "react";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 350,
    title: "A shirt",
    discount: 35,
    description: "blue colored jeans shirt",
    image:
      "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: "p2",
    price: 700,
    title: "a Jeans",
    discount: 80,
    description: "A denim blue mens jeans",
    image:
      "https://images.unsplash.com/photo-1516271099866-de31ba93ee4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: "p3",
    price: 900,
    title: "a Shoes",
    discount: 100,
    description: "mens sports shoes",
    image:
      "https://images.unsplash.com/photo-1561808843-7adeb9606939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
];

const Products = (props) => {
  const [state, setState] = useState([]);

  const fetchDataHandler = useCallback(() => {
    fetch("https://89ed-103-240-35-190.in.ngrok.io/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.products);
        setState(data.products);
      });
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {state.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
            image={product.poster_urls[0]}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
