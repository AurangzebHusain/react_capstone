import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";

import { ProductCard } from "../product-card/product-card.component";
import "./shop-component.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((e) => (
        <ProductCard key={e.id} product={e}></ProductCard>
      ))}
    </div>
  );
};
export default Shop;
