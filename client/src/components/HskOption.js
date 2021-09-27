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
      <img
        alt="A panda"
        className="h-48 w-full md:w-72 rounded-b md:rounded-r"
        src={pandaImage}
      />
    </button>
  );
};

export default HskOption;
