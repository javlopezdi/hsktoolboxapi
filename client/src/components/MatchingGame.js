import React, { useEffect } from "react";
import { connect } from "react-redux";
import RegularContainer from "./containers/RegularContainer";
import MatchingCard from "./MatchingCard";
import { setMatchingGameCards, cleanMatchingGame } from "../actions";
import MatchingGameDialog from "./matchinggame/MatchingGameDialog";

const MatchingGame = ({
  hskWords,
  setMatchingGameCards,
  matchingGameCards,
  cleanMatchingGame,
}) => {
  useEffect(() => {
    setMatchingGameCards(hskWords);
    return () => {
      cleanMatchingGame();
    };
    // eslint-disable-next-line
  }, []);

  const renderCards = () => {
    return matchingGameCards.map((card, index) => {
      return <MatchingCard key={index} index={index} />;
    });
  };

  return (
    <RegularContainer>
      <div className="pt-12">
        <h2 className="text-3xl">
          Tap a pair of cards at a time to reveal if they are a match
        </h2>
      </div>
      {/* Grid of cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 py-8 gap-x-4">
        {renderCards()}
      </div>
      <MatchingGameDialog />
    </RegularContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    hskWords: state.hskWords,
    matchingGameCards: state.matchingGame.matchingGameCards,
  };
};

export default connect(mapStateToProps, {
  setMatchingGameCards,
  cleanMatchingGame,
})(MatchingGame);
