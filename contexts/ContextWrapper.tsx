"use client";

import { ReactElement } from "react";
import ToasterProvider from "./ToasterProvider";
import LoaderProvider from "./LoaderProvider";

const ContextWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <LoaderProvider>
      <ToasterProvider>{children}</ToasterProvider>
    </LoaderProvider>
  );
};

export default ContextWrapper;
