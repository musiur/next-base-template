"use client";

import { LoaderContext, UniLoaderType } from "@/contexts/LoaderProvider";
import { ToasterContext, UniToastType } from "@/contexts/ToasterProvider";
import { useContext } from "react";

const Home = () => {
  const { toast, setToast } = useContext<UniToastType>(ToasterContext);
  const { loader, setLoader } = useContext<UniLoaderType>(LoaderContext);
  console.log(toast, loader);
  return (
    <section className="container mx-auto">
      <h1>Home Page</h1>
      <button
        onClick={() => {
          setLoader(true);
          setToast({ show: true, type: true, text: "This is a test to show!" });
        }}
        className="btn-error my-10"
      >
        Set Toast
      </button>
    </section>
  );
};

export default Home;
