import { useState, useEffect } from "react";
// import restList from "../../utils/mockdata";
import RestrauCard from "./RestrauCard";
import Shimmer from "./Shimmer";
import useStatus from "../utils/useStatus";
import { Link } from "react-router-dom";
import Offline from "./Offline";

let Body = () => {
  let [inRestList, setRestList] = useState([]);
  let [filRestList, SetFilsetRestList] = useState([]);

  async function fetchRestrau() {
    let res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await res.json();
    let restrauList =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestList(restrauList);
    SetFilsetRestList(restrauList);
  }

  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestrau();
  }, []);

  let statusData = useStatus();
  if (statusData === false) return <Offline />;

  // Top rated filter logic
  let TopRated = () => {
    let filterArr = filRestList.filter((ele) => {
      return ele?.info?.avgRating > 4.4;
    });
    SetFilsetRestList(filterArr);
  };

  // conditional rendering
  return inRestList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="search-container ">
        <input
          type="text"
          className="input-form"
          placeholder="search your cravings..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="input-btn"
          onClick={() => {
            // searching logic
            let arr = inRestList.filter((ele) => {
              return ele.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            SetFilsetRestList(arr);
          }}
        >
          Search
        </button>
      </div>

      <div className="restrau-container">
        <div className="restrau-header">
          <h1 className="secondary--heading">
            Restaurants with online food delivery in Bangalore
          </h1>
          <div className="restrau-header--btns">
            <button className="btn top-rated--btn" onClick={TopRated}>
              top rated &uarr;
            </button>
          </div>
        </div>

        <div className="restrau-cards">
          {filRestList.map((ele) => {
            return (
              <Link key={ele.info.id} to={"/restraunts/" + ele.info.id}>
                <RestrauCard restData={ele} />{" "}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;

// on every key press in searchText the whole body componnet is getting re-render as state varibale is changing its value on each keypress
