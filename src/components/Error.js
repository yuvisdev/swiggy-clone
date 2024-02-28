import { useRouteError } from "react-router-dom";

function Error() {
  let error = useRouteError();
  return (
    <div>
      <h1>Oops!! Something went wrong</h1>
      <h2>{error.status}</h2>
    </div>
  );
}

export default Error;
