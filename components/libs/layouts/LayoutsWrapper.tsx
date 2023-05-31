import { ReactElement } from "react";
import Toaster from "./Toaster";

const LayoutsWrapper = ({ children }: { children: ReactElement }) => {
  return <Toaster>{children}</Toaster>;
};

export default LayoutsWrapper;
