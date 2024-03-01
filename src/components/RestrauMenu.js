import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

let RestrauMenu = () => {
  let { restrauId } = useParams();

  const restauList = useRestrauntMenu(restrauId);

  if (restauList.length === 0) return <Shimmer />;

  const { name, cuisines } = restauList?.cards[0]?.card?.card?.info;

  const topPickData =
    restauList?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1]?.card?.card
      ?.carousel || [];

  const menuData =
    restauList?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card
      ?.itemCards || [];

  return (
    <div className="container">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>

      {/* config driven UI */}
      {topPickData.length > 0 && (
        <>
          <h2>Our Top Picks: </h2>
          <ul>
            {topPickData.map((item) => (
              <li key={item.bannerId}>
                {item.title} - RS.{item.dish.info.price / 100}
              </li>
            ))}
          </ul>
        </>
      )}

      {menuData.length > 0 && (
        <>
          <h2>Our Main Menu:</h2>
          <ul>
            {menuData.map((item) => (
              <li key={item.card.info.id}>
                {item?.card?.info?.name} - RS. {item.card.info.price / 100}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default RestrauMenu;
// deconstruct api till you get array than .map() it for all elements
