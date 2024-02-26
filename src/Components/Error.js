import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1> OOps {err.status} is not defined</h1>
    </div>
  );
};
export default Error;
