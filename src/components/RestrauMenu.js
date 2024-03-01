import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauCategory from "./RestrauCategory";

let RestrauMenu = () => {
  let { restrauId } = useParams();

  const restauList = useRestrauntMenu(restrauId);

  if (restauList.length === 0) return <Shimmer />;

  console.log(restauList?.cards[0]?.card?.card?.info);

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    avgRating,
    totalRatingsString,
  } = restauList?.cards[0]?.card?.card?.info;

  const categories =
    restauList?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
      (e) =>
        e?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  const topPickData =
    restauList?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1]?.card?.card
      ?.carousel || [];

  const menuData =
    restauList?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card
      ?.itemCards || [];

  return (
    // header section
    <div className="menu-container mx-auto pt-[44px] ">
      <div className="flex items-center border-solid border-b-[1px]">
        <div className="pb-4">
          <h1 className="text-[20px] font-semibold tracking-wide pb-2">
            {name}
          </h1>
          <p className="text-slate-500 text-[12px] pt-3">
            {cuisines.join(", ")}
          </p>
          <p className="text-slate-500 text-[12px] ">{areaName}</p>
          <p className=" text-[16px] pt-[12px] font-bold text-slate-700">
            {costForTwoMessage}
          </p>
        </div>

        <div className="ml-auto">
          <div className="flex items-center gap-2 w-[100px]  text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[18px] text-green-700 fill-green-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <p className="text-green-700 font-bold text-[14px]">{avgRating}</p>
          </div>
          <p className="text-slate-400  text-[12px]">{totalRatingsString}</p>
        </div>
      </div>

      {/* categories ui */}
      <div className="mt-[36px]  bg-slate-100 overflow-hidden">
        {categories.map((cat, ind) => {
          return <RestrauCategory key={ind} data={cat.card.card} />;
        })}
      </div>

      {/* config driven UI */}
      {/* {topPickData.length > 0 && (
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
      )} */}
    </div>
  );
};

export default RestrauMenu;
// deconstruct api till you get array than .map() it for all elements
