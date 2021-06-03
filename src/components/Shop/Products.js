import ProductItem from './ProductItem';
import classes from './Products.module.css';
const Dummy_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'first bok i ever wrote'
  },
  {
    id: 'p2',
    price: 3,
    title: 'My firt app',
    description: 'first app i ever made in redux'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{Dummy_PRODUCTS.map(prod => (
        <ProductItem
          title={prod.title}
          price={prod.price}
          description={prod.description}
          id={prod.id}
          key={prod.id}
        />
      ))}

      </ul>
    </section>
  );
};

export default Products;
