import React from "react";
import { connect } from "react-redux";
import { Dialog } from "@headlessui/react";
import { setIsResultsDialogOpen } from "../../actions";
import TickLogo from "../svgs/TickLogo";
import XLogo from "../svgs/XLogo";

const ResultsDialog = ({
  setIsResultsDialogOpen,
  isResultsDialogOpen,
  selectedHsk,
  multipleChoiceQuestions,
}) => {
  const handleClose = () => {
    setIsResultsDialogOpen(false, selectedHsk);
  };

  const renderScore = () => {
    const numberOfCorrects = multipleChoiceQuestions.reduce((acc, question) => {
      return question.isCorrect ? acc + 1 : acc;
    }, 0);
    const totalOfQuestions = multipleChoiceQuestions.length;
    return `Your score is ${numberOfCorrects}/${totalOfQuestions}`;
  };

  const renderResults = () => {
    return multipleChoiceQuestions.map((question, index) => {
      return (
        <React.Fragment key={index}>
          <div className="font-semibold">{index + 1}.</div>
          <div className="font-semibold">{question.hanzi}</div>
          <div className="flex justify-end">
            {question.isCorrect ? <TickLogo /> : <XLogo />}
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <Dialog
      open={isResultsDialogOpen}
      onClose={handleClose}
      className="fixed z-25 inset-0"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed z-27 inset-0 bg-black bg-opacity-40" />
        <div className="bg-semiWhite z-30 rounded-3xl max-w-sm mx-auto pt-12 pb-8 px-10 space-y-2">
          <Dialog.Title className="text-center text-2xl font-semibold">
            Results
          </Dialog.Title>
          <Dialog.Description className="text-center text-lg pb-4">
            {renderScore()}
          </Dialog.Description>
          <div className="grid grid-cols-3 gap-y-2 w-72 text-lg">
            {renderResults()}
          </div>
          <div className="text-center">
            <button
              onClick={handleClose}
              className="mt-4 py-3 bg-blueCrayola rounded-lg text-white font-bold text-xl px-8 text-center"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    isResultsDialogOpen: state.dialog.isResultsDialogOpen,
    selectedHsk: state.hsk.selectedHsk,
    multipleChoiceQuestions: state.multipleChoice.multipleChoiceQuestions,
  };
};

export default connect(mapStateToProps, { setIsResultsDialogOpen })(
  ResultsDialog
);
