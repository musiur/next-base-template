import { ReactElement } from "react";

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  return <div>{children}</div>;
};

export default PrivateRoute;
