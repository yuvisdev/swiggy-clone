import { useEffect, useState } from "react";

const useRestrauntMenu = (restrauId) => {
  let [restauList, setRestrauList] = useState([]);

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

  return restauList;
};

export default useRestrauntMenu;
