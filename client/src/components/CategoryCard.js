import React from "react";
import WordList from "./progress/WordList";

const CategoryCard = ({ category, learned, total }) => {
  return (
    <div className="bg-semiWhite flex flex-col w-full justify-around space-y-4 mx-auto my-5 rounded-xl shadow-md py-3 px-7">
      {/* Title */}
      <div className="text-center text-xl font-semibold pt-2">
        <h4>{category}</h4>
      </div>
      {/* Progress elements */}
      <div className="flex items-center space-x-4">
        {/* Container bar */}
        <div className="flex-grow border-2 h-11">
          {/* Filling bar */}
          <div
            className="bg-blueCrayola bg-opacity-80 h-full"
            style={{ width: `${(learned / total) * 100}%` }}
          ></div>
        </div>
        {/* Progress number */}
        <div className="ml-auto">
          <p className="font-bold">
            {learned}/{total}
          </p>
        </div>
      </div>
      {/* Word list */}
      <WordList category={category.toLowerCase()} />
    </div>
  );
};

export default CategoryCard;
