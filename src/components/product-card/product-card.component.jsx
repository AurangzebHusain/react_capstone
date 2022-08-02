import "./product-card.styles.scss";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <div
        className="img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="add-to-cart-button">
        <button>ADD TO CART</button>
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price">{price}</div>
      </div>
    </div>
  );
};
