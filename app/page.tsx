'use client';

import { ToasterContext, UniToastType } from "@/contexts/ToasterProvider";
import { useContext } from "react";


const Home = () => {
  const {toast, setToast} = useContext<UniToastType>(ToasterContext)
  console.log(toast)
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setToast({show: true, type: true, text: "This is a test to show!"})}>Set Toast</button>
    </div>
  );
};

export default Home;
