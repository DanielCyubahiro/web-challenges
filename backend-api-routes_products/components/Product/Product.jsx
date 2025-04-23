const Product = ({product}) => {
  return (
      <>
        <p>name: {product.name}</p>
        <p>category: {product.category}</p>
        <p>description: {product.description}</p>
        <p>price: {product.price}</p>
      </>
  );
};

export default Product;