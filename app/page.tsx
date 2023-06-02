"use client";

import { LoaderContext, UniLoaderType } from "@/contexts/LoaderProvider";
import { ToasterContext, UniToastType } from "@/contexts/ToasterProvider";
import { useContext, useEffect } from "react";

const Home = () => {
  const { toast, setToast } = useContext<UniToastType>(ToasterContext);
  const { loader, setLoader } = useContext<UniLoaderType>(LoaderContext);
  console.log(toast, loader);

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    }
  }, [loader, setLoader]);
  return (
    <>
      <section className="container mx-auto">
        <h1>Home Page</h1>
      </section>
      <section className="container mx-auto">
        <h3>Components</h3>
        <p className="text-gray-400">Test the components</p>
        <div className="flex items-center gap-5 flex-wrap my-5">
          <button
            onClick={() => {
              setToast({
                show: true,
                type: true,
                text: "Successfully toast appeared!",
              });
            }}
            className="btn-primary"
          >
            Set Success Toast
          </button>
          <button
            onClick={() => {
              setToast({
                show: true,
                type: false,
                text: "Something broken in toast!",
              });
            }}
            className="btn-primary"
          >
            Set Error Toast
          </button>
          <button
            onClick={() => {
              setLoader(true);
            }}
            className="btn-secondary"
          >
            Set Loader
          </button>
        </div>
      </section>
      <section className="container mx-auto">
        <h3>Buttons</h3>
        <div className="text-gray-400">Four variants are available</div>
        <div className="flex items-center justify-start flex-wrap gap-5 my-5">
          <button className="btn-primary">Primary</button>
          <button className="btn-secondary">Secondary</button>
          <button className="btn-outline">Outline</button>
          <button className="btn-error">Error</button>
        </div>
      </section>
    </>
  );
};

export default Home;
