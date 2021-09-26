import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHskWords } from "../actions";
import CategoryCard from "./CategoryCard";
import RegularContainer from "./containers/RegularContainer";

const Progress = ({ selectedHsk, fetchHskWords, hskWords }) => {
  useEffect(() => {
    fetchHskWords(selectedHsk);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedHsk]);

  let numberOfWords = {};
  let numberOfLearnedWords = {};

  if (hskWords) {
    Object.values(hskWords).forEach((word) => {
      numberOfLearnedWords[word.category] =
        numberOfLearnedWords[word.category] || 0;
      if (word.isLearned) {
        numberOfLearnedWords[word.category] =
          (numberOfLearnedWords[word.category] || 0) + 1;
      }
      numberOfWords[word.category] = (numberOfWords[word.category] || 0) + 1;
    });
    numberOfWords.total = Object.values(numberOfWords).reduce(
      (acc, val) => acc + val,
      0
    );
    numberOfLearnedWords.total = Object.values(numberOfLearnedWords).reduce(
      (acc, val) => acc + val,
      0
    );
  }

  const renderCategoryCards = () => {
    return Object.keys(numberOfWords)
      .filter((category) => category !== "total")
      .sort((a, b) => (a < b ? -1 : 1))
      .map((category) => {
        return (
          <CategoryCard
            key={category}
            category={category.charAt(0).toUpperCase() + category.substring(1)}
            learned={numberOfLearnedWords[category]}
            total={numberOfWords[category]}
          />
        );
      });
  };

  return (
    <RegularContainer>
      {/* Title */}
      <div className="pt-8 pb-8">
        <h2 className="text-6xl text-center">Your Progress</h2>
      </div>
      {/* Overall progress */}
      <div className="py-8">
        <h5 className="text-center text-lg">
          You have learned {numberOfLearnedWords.total} out of{" "}
          {numberOfWords.total} words
        </h5>
      </div>
      <div className="text-center items-center text-lg font-semibold">
        <h5 className="">Pump those numbers</h5>
        <Link to={`/hsk${selectedHsk}/practice`}>
          <button className="my-4 py-2 px-4 font-bold rounded bg-verdigris text-white transition duration-200 transform hover:-translate-y-1">
            Practice now!
          </button>
        </Link>
      </div>
      {/* Categories progress */}
      <div className="grid md:grid-cols-1">{renderCategoryCards()}</div>
    </RegularContainer>
  );
};

const mapStateToProps = (state) => {
  return { selectedHsk: state.hsk.selectedHsk, hskWords: state.hskWords };
};

export default connect(mapStateToProps, { fetchHskWords })(Progress);
