import React from "react";
import "../MatchingCard.css";
import { connect } from "react-redux";
import { flipCard, handleTransitionEnd } from "../actions";

const MatchingCard = ({
  index,
  isFlipped,
  content,
  isAnswered,
  isPaused,
  isFlipping,
  flipCard,
  handleTransitionEnd,
}) => {
  const handleClick = () => {
    if (!isFlipping && !isAnswered && !isPaused) {
      flipCard(index);
    }
  };

  return (
    <div
      onClick={handleClick}
      onTransitionEnd={() => handleTransitionEnd(index)}
      className="flip-card md:h-64 lg:h-96 w-full my-8"
    >
      <div
        className={`${
          (isFlipped && !isFlipping) || (!isFlipped && isFlipping)
            ? "flipped "
            : ""
        }flip-card-inner`}
      >
        <div className="flip-card-front bg-blueCrayola rounded-xl border-8 border-platinum flex items-center justify-center">
          <p className="text-4xl font-semibold text-white">HSK 1</p>
        </div>
        <div className="flip-card-back bg-platinum rounded-xl flex items-center justify-center px-8">
          <p className="text-3xl">{content}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const card = state.matchingGame.matchingGameCards[ownProps.index];
  return {
    isFlipped: card.isFlipped,
    isAnswered: card.isAnswered,
    isPaused: state.matchingGame.isPaused,
    content: card.hanzi || card.translations,
    isFlipping: card.isFlipping,
  };
};

export default connect(mapStateToProps, { flipCard, handleTransitionEnd })(
  MatchingCard
);
