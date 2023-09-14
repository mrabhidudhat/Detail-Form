import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="body-contain">
        <Outlet />
      </div>
    </>
  );
};

export default Body;
