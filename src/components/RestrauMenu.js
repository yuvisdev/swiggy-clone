import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

let RestrauMenu = () => {
  let [resInfo, setRestinfo] = useState(null);

  let { resId } = useParams();

  async function fetchMenu() {
    let res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    let dataRes = await res.json();
    setRestinfo(dataRes.data);
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  let data = resInfo?.cards[0]?.card?.card?.info;
  let { name: resName, cuisines } = data;

  //   deconstruct api till you get array than .map() it for all elements
  let { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className=" container">
      <div className="menu">
        <h1>{resName}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} - {" Rs."}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestrauMenu;
