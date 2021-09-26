import React from "react";

const HskOption = ({
  title,
  content,
  isOdd,
  pandaImage,
  value,
  onOptionClick,
  disabled,
}) => {
  return (
    <button
      onClick={() => onOptionClick(value)}
      disabled={disabled}
      className={`
                  flex flex-col
                  ${isOdd ? "md:flex-row" : "md:flex-row-reverse "}
                  border-2 rounded-xl my-4
                  ${
                    disabled
                      ? "opacity-40 bg-gray-100"
                      : "hover:bg-blueCrayola hover:bg-opacity-10 hover:ring-4"
                  }
                `}
    >
      <div className="flex-grow p-4">
        <h3 className="text-center text-lg font-semibold pb-2">{title}</h3>
        <p className="text-justify">{content}</p>
      </div>
      <div
        className={`bg-${pandaImage} h-48 w-full md:w-72 bg-cover flex-shrink-0 rounded-b-xl`}
      ></div>
    </button>
  );
};

export default HskOption;
