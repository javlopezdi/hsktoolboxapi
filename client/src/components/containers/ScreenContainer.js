import React from "react";

const ScreenContainer = (props) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-14"></div>
      <div className="lg:px-48 container px-5 h-full flex-grow flex flex-col justify-around md:justify-center mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export default ScreenContainer;
