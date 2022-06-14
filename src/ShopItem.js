function ShopItem(props) {
  const { card, key } = props;
  return (
    <div className="cards-item list" id={key}>
      <div className="cards-item__img list">
        <img className="card-image" src={card.img}/>
      </div>
      <div className="cards-item__title list">{card.name.toUpperCase()}</div>
      <div className="cards-item__color">{card.color.toLowerCase()}</div>
      <div className="footer__price">${card.price}</div>
      <button className="footer__cart-button">ADD TO CART</button>
    </div>
  );
}

export default ShopItem;
