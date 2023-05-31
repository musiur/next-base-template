"use client";

import {
  InitialToastValue,
  ToasterContext,
  UniToastType,
} from "@/contexts/ToasterProvider";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useContext, useEffect, useState } from "react";

// component styles
enum STYLES {
  CONTAINER = "fixed top-0 left-0 w-screen h-screen",
  TOAST = "absolute top-[70px] right-0 m-2 bg-white border rounded-lg drop-shadow-xl p-3 min-w-[300px] flex items-center justify-between gap-3 z-[300]",
  TEXT = "text-gray-800 font-semibold",
  ICON = "text-gray-300 cursor-pointer",
  ANIMATION = "transition ease-in-out duration-500",
  MOUNTED = "translate-x-0",
  UNMOUNTED = "translate-x-[100%]",
  SUCCESS_BORDER = "border-green-400",
  SUCCESS_TEXT = "text-green-400",
  ERROR_BORDER = "border-red-400",
  ERROR_TEXT = "text-red-400",
}

// main component function
const Toaster = ({ children }: { children: ReactElement }) => {
  const { toast, setToast } = useContext<UniToastType>(ToasterContext); // for value
  const [isMounted, setIsMounted] = useState<boolean>(false); // for animation

  // animate on appearing
  useEffect(() => {
    toast.show && setIsMounted(true);
  }, [toast]);

  // removing toast after a while
  useEffect(() => {
    if (isMounted) {
      setTimeout(() => {
        setIsMounted(false);
      }, 5000);
    }
  }, [isMounted]);

  return (
    <div>
      {toast.show ? (
        <div
          className={`${STYLES.CONTAINER} ${STYLES.ANIMATION} ${
            isMounted ? STYLES.MOUNTED : STYLES.UNMOUNTED
          }`}
          onAnimationEnd={() => !isMounted && setToast(InitialToastValue)}
        >
          <div
            className={`${STYLES.TOAST} ${
              toast.type ? STYLES.SUCCESS_BORDER : STYLES.ERROR_BORDER
            }`}
          >
            <div
              className={`${STYLES.TEXT} ${
                toast.type ? STYLES.SUCCESS_TEXT : STYLES.ERROR_TEXT
              }`}
            >
              {toast.text}
            </div>
            <FontAwesomeIcon
              icon={faTimes}
              className={`${STYLES.ICON} ${
                toast.type ? STYLES.SUCCESS_TEXT : STYLES.ERROR_TEXT
              }`}
              onClick={() => {
                setIsMounted(false); // removing toast at => line 40: onAnimationEnd
              }}
            />
          </div>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Toaster;
