import { useEffect, useState } from "react";
import ProductLoader from "./productLoader";
import ProductFilters from "./productFilter";
import ProductsList from "./productsList";

const ProductsContainer = () => {
  const [products, setProducts] = useState(null);

  const [status, setStatus] = useState("loading");

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      if (res.status === 200) {
        const data = await res.json();

        setProducts(data.products);
        setStatus("done");
        return;
      }
      throw res;
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  const hasProducts = isDone && products !== null;
  const noProducts = isDone && products === null;

  return (
    <div>
      <h2>Latest Products</h2>
      {isLoading && <ProductLoader />}
      {isError && <p>Something went wrong</p>}
      {noProducts && <p>Products not available</p>}
      {hasProducts && (
        <div>
          <ProductFilters />
          <ProductsList products={products} />
        </div>
      )}
    </div>
  );
};
export default ProductsContainer;
