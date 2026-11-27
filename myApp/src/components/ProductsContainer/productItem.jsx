const ProductItem = ({ product }) => {
  const { title, thumbnail } = product;
  return (
    <div>
      <div>
        <img src={thumbnail} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};
export default ProductItem;
