import React from "react";
import { connect } from "react-redux";
import { Disclosure } from "@headlessui/react";

const WordList = ({ category, hskWords }) => {
  const filterWords = (words, cat) => {
    return words.filter((word) => word.category === cat);
  };

  const renderFilteredWords = () => {
    return filterWords(Object.values(hskWords), category).map((word, index) => {
      return (
        <React.Fragment key={index}>
          <div>{index + 1}</div>
          <div className="font-semibold">{word.hanzi}</div>
          <div
            className={`text-right ${word.isLearned ? "text-green-500" : ""}`}
          >
            {word.isLearned ? "Learned!" : "-"}
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="text-center flex justify-center items-center space-x-2">
            <p className="text-lg">Word List</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 ${open ? "transform rotate-90" : ""}`}
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
          </Disclosure.Button>
          <Disclosure.Panel className="grid grid-cols-3 gap-y-2 text-lg lg:w-3/4 mx-auto">
            {renderFilteredWords()}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const mapStateToProps = (state) => {
  return { hskWords: state.hskWords };
};

export default connect(mapStateToProps)(WordList);
