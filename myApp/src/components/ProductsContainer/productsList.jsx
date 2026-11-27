import ProductItem from "./productItem";

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;
