import React from "react";
import { RadioGroup } from "@headlessui/react";

const AnswerOption = ({ value, answer }) => {
  return (
    <RadioGroup.Option className="w-full mx-auto" value={value}>
      {({ checked }) => (
        <button
          className={`${
            checked
              ? "bg-verdigris bg-opacity-100 ring-verdigris ring-offset-4 ring-4 "
              : "bg-blueCrayola bg-opacity-60 "
          }w-full text-center py-2 md:py-3 text-white font-semibold rounded-2xl text-lg md:text-xl transition duration-150 transform hover:-translate-y-0.5`}
        >
          {answer}
        </button>
      )}
    </RadioGroup.Option>
  );
};

export default AnswerOption;
