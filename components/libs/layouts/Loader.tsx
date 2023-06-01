'use client';

import { LoaderContext, UniLoaderType } from "@/contexts/LoaderProvider";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useContext, useEffect, useState } from "react";

// styles
enum STYLES {
  CONTAINER = "fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex items-center justify-center transition ease-in-out duration-300 bg-[#00000050]",
  LOADER = "p-2 rounded-full shadow-xl bg-white",
  MOUNTED = "scale-[100%]",
  UNMOUNTED = "scale-0",
  ICON = "animate-reverse-spin text-3xl lg:text-5xl",
}

// main component function
const Loader = ({ children }: { children: ReactElement }) => {
  const { loader, setLoader } = useContext<UniLoaderType>(LoaderContext);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // animate on component mounting
  useEffect(() => {
    if (loader) {
      loader && setIsMounted(true);
    }
  }, [loader]);

  return (
    <div>
      {loader ? (
        <div
          className={`${STYLES.CONTAINER} ${
            isMounted ? STYLES.MOUNTED : STYLES.UNMOUNTED
          }`}
          onAnimationEnd={() => !isMounted && setLoader(false)}
        >
          <div className={STYLES.LOADER}>
            <FontAwesomeIcon icon={faFan} className={STYLES.ICON} />
          </div>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Loader;
