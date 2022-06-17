import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 350,
    title: "A shirt",
    description: "blue colored jeans shirt",
  },
  {
    id: "p2",
    price: 700,
    title: "a Jeans",
    description: "A denim blue mens jeans",
  },
  {
    id: "p3",
    price: 900,
    title: "a Shoes",
    description: "mens sports shoes",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
