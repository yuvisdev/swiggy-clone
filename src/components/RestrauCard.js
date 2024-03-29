import { CDN_LINK } from "../utils/constants";

let RestrauCard = (prop) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla: { deliveryTime },
    areaName,
  } = prop?.restData?.info;

  const arr = cuisines.slice(0, 2);
  const displayCuisines = cuisines.length > 2 ? [...arr, "..."] : arr;

  return (
    <div className="restrau-card">
      <img src={CDN_LINK + cloudinaryImageId} className="restrau-card--img" />
      <div className="restrau-card--bottom">
        <p className="restrau-name">{name}</p>
        <div className="about-restrau">
          <div className="rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="rating-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <p className="rating-num">{avgRating}</p>
          </div>
          <p className="restrau-time"> &#x2022; {deliveryTime} mins</p>
        </div>

        <p className="cuisines">{displayCuisines.join(", ")}</p>
        <p className="address">{areaName}</p>
      </div>
    </div>
  );
};

// Returning new Component
export let ourFav = (RestrauCard) => {
  return (prop) => {
    return (
      <div className="relative">
        <label className="absolute text-white bg-slate-700 rounded-md px-2 py-1  top-[-12px] text-lg ">
          Recommended
        </label>
        <RestrauCard {...prop} />
      </div>
    );
  };
};

export default RestrauCard;
