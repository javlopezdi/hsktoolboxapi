import React from "react";

const RegularContainer = (props) => {
  return (
    <div className="flex flex-col">
      <div className="h-20"></div>
      <div className="lg:px-48 container px-5 h-full flex-grow flex flex-col justify-center mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export default RegularContainer;
