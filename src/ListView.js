import ShopItem from "./ShopItem";

function ListView(props) {
  const { cards } = props;
  return (
    <div className="list-container">
      {
        cards.map((card, index) => {
          return (
            <ShopItem card={card} key={index}/>
          );
        })
      }
    </div>
  );
}

export default ListView;
