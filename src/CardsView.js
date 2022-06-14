import ShopCard from './ShopCard';

function CardsView(props) {
  const { cards } = props;
  return (
    <div className="cards-container">
      {
        cards.map((card, index) => {
          return (
            <ShopCard card={card} key={index}/>
            );
        })
      }
    </div>
  );
}

export default CardsView;
