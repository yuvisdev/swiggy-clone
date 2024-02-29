import { useRouteError } from "react-router-dom";

function Error() {
  let data = useRouteError();
  console.log(data);

  return (
    <div className="container">
      <h1>Ooops!! Something went wrong</h1>
      <h2>{data.status}</h2>
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW9zdWZwd212YWg0ajE5NXhibDMwdXFmcWpsaTlsMTM5dXg5OXowNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/C21GGDOpKT6Z4VuXyn/giphy.gif" />
    </div>
  );
}

export default Error;
