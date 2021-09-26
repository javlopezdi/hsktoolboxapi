import React from "react";

const QuestionBox = ({ question, questionProgress }) => {
  return (
    <div className="bg-platinum rounded-xl px-4 flex items-center justify-center relative shadow-md">
      <h4 className=" py-10 text-5xl md:text-6xl font-semibold text-richBlack">
        {question}
      </h4>
      <p className="absolute -top-5 rounded-full border-2 border-blueCrayola text-white font-semibold p-2 bg-blueCrayola">
        {questionProgress}
      </p>
    </div>
  );
};

export default QuestionBox;
