// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";

// let RestrauMenu = () => {
//   let [resInfo, setRestinfo] = useState(null);

//   let { resId } = useParams();

//   async function fetchMenu() {
//     let res = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
//         resId +
//         "&catalog_qa=undefined&submitAction=ENTER"
//     );
//     let dataRes = await res.json();
//     setRestinfo(dataRes.data);
//   }

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   if (resInfo === null) return <Shimmer />;

//   let data = resInfo?.cards[0]?.card?.card?.info;
//   let { name: resName, cuisines } = data;

//   //
//   let { itemCards } =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//   return (
//     <div className=" container">
//       <div className="menu">
//         <h1>{resName}</h1>
//         <h3>{cuisines.join(", ")}</h3>
//         <h2>Menu</h2>
//         <ul>
//           {itemCards.map((item) => {
//             return (
//               <li key={item.card.info.id}>
//                 {item.card.info.name} - {" Rs."}
//                 {item.card.info.price / 100 ||
//                   item.card.info.defaultPrice / 100}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RestrauMenu;

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

let RestrauMenu = () => {
  let [restauList, setRestrauList] = useState([]);
  let { restrauId } = useParams();

  async function fetchData() {
    let res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        restrauId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    let data = await res.json();
    setRestrauList(data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
