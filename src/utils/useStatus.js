import { useEffect, useState } from "react";

let useStatus = () => {
  let [status, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setStatus(true);
    });

    window.addEventListener("offline", (event) => {
      setStatus(false);
    });
  }, []);

  return status;
};

export default useStatus;
