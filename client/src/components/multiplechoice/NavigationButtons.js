import React from "react";
import { connect } from "react-redux";

const NavigationButtons = ({
  handlePrevious,
  handleNext,
  currentQuestion,
  maxIndex,
}) => {
  return (
    <div className="grid grid-cols-2 md:py-8 gap-x-2 mb-3">
      <div>
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="py-3 border-2 border-blueCrayola bg-white rounded-lg flex text-blueCrayola font-bold text-xl items-center w-full justify-center px-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <p className="flex-grow">Previous</p>
        </button>
      </div>
      <div>
        <button
          onClick={handleNext}
          disabled={currentQuestion === maxIndex}
          className="py-3 border-2 border-blueCrayola bg-white rounded-lg flex text-blueCrayola font-bold text-xl items-center w-full justify-center px-2"
        >
          <p className="flex-grow">Next</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentQuestion: state.multipleChoice.currentQuestion };
};

export default connect(mapStateToProps)(NavigationButtons);
