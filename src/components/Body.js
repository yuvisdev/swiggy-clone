import { useState } from "react";
import restList from "../../utils/mockdata";
import RestrauCard from "./RestrauCard";

let Body = () => {
  let [inRestList, setRestList] = useState(restList);

  // Top rated filter logic
  let TopRated = () => {
    let filterArr = restList.filter((ele) => {
      return ele?.info?.avgRating > 4.5;
    });
    setRestList(filterArr);
  };

  return (
    <div className="container">
      <div className="search-container ">
        <input
          type="text"
          className="input-form"
          placeholder="search your cravings..."
        />
        <button className="input-btn">Search</button>
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
          {inRestList.map((ele) => {
            return <RestrauCard key={ele.info.id} restData={ele} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
