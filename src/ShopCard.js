function ShopCard(props) {
  const { card, key } = props;
  return (
    <div className="cards-item" id={key}>
      <div className="cards-item__title">{card.name.toUpperCase()}</div>
      <div className="cards-item__color">{card.color.toLowerCase()}</div>
      <div className="cards-item__img">
        <img className="card-image" src={card.img}/>
      </div>
      <div className="cards-item__footer">
        <div className="footer__price">${card.price}</div>
        <button className="footer__cart-button">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ShopCard;
