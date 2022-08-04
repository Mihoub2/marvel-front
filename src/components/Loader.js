import React, { useState, useEffect } from "react";
import deadpool from "../assets/deadpool.gif";
import "./loader.scss";

const Loader = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <div className="loader">
      <img className="gif" src={deadpool} alt="ok" />
    </div>
  );
};
export default Loader;
