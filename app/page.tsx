'use client';

import { ToasterContext, UniToastType } from "@/contexts/ToasterProvider";
import { useContext } from "react";


const Home = () => {
  const {toast, setToast} = useContext<UniToastType>(ToasterContext)
  console.log(toast)
  return (
    <div className="p-5">
      <h1>Home Page</h1>
      <button onClick={() => setToast({show: true, type: true, text: "This is a test to show!"})} className="m-5 px-4 py-[0.5rem] rounded-lg border border-gray-800 hover:bg-gray-800 hover:text-white transition ease-in-out duration-150">Set Toast</button>
    </div>
  );
};

export default Home;
