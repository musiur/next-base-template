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
    <section className="container mx-auto">
      <h1 className="text-2xl lg:text-4xl font-bold">Home Page</h1>
      <div className="text-gray-400">Test the components</div>
      <div className="flex items-center gap-10 flex-wrap">
        <button
          onClick={() => {
            setToast({
              show: true,
              type: true,
              text: "Successfully toast appeared!",
            });
          }}
          className="btn-primary my-10"
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
          className="btn-primary my-10"
        >
          Set Error Toast
        </button>
        <button
          onClick={() => {
            setLoader(true);
          }}
          className="btn-secondary my-10"
        >
          Set Loader
        </button>
      </div>
      <br />
      <h1 className="text-2xl lg:text-4xl font-bold">Buttons</h1>
      <div className="text-gray-400 mb-5">Four variants are available</div>
      <div className="flex items-center justify-start flex-wrap gap-10">
        <button className="btn-primary">Primary</button>
        <button className="btn-secondary">Secondary</button>
        <button className="btn-outline">Outline</button>
        <button className="btn-error">Error</button>
      </div>
    </section>
  );
};

export default Home;
