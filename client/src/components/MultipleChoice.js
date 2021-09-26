import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RadioGroup } from "@headlessui/react";
import {
  setSelectedMultipleChoiceAnswer,
  setMultipleChoiceQuestions,
  setCurrentQuestion,
  submitMultipleChoiceQuestions,
  setIsResultsDialogOpen,
} from "../actions";
import ScreenContainer from "./containers/ScreenContainer";
import AnswerOption from "./multiplechoice/AnswerOption";
import QuestionBox from "./multiplechoice/QuestionBox";
import NavigationButtons from "./multiplechoice/NavigationButtons";
import ResultsDialog from "./multiplechoice/ResultsDialog";

const MultipleChoice = ({
  setSelectedMultipleChoiceAnswer,
  selectedMultipleChoiceAnswer,
  setMultipleChoiceQuestions,
  setCurrentQuestion,
  hskWords,
  multipleChoiceQuestions,
  currentQuestion,
  submitMultipleChoiceQuestions,
  selectedHsk,
}) => {
  useEffect(() => {
    setMultipleChoiceQuestions(hskWords);
    // eslint-disable-next-line
  }, []);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1, multipleChoiceQuestions);
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1, multipleChoiceQuestions);
  };

  const handleSubmit = () => {
    submitMultipleChoiceQuestions(multipleChoiceQuestions, selectedHsk);
  };

  const handleAnswerChange = (value) => {
    setSelectedMultipleChoiceAnswer(
      value,
      multipleChoiceQuestions,
      currentQuestion
    );
  };

  const renderQuestion = () => {
    return multipleChoiceQuestions.length
      ? multipleChoiceQuestions[currentQuestion].hanzi
      : "Loading";
  };

  const renderQuestionProgress = () => {
    return `${currentQuestion + 1}/${multipleChoiceQuestions.length}`;
  };

  const renderAnswer = (optionValue) => {
    return multipleChoiceQuestions.length
      ? multipleChoiceQuestions[currentQuestion].answers[optionValue]
      : "Loading";
  };

  const renderAnswerOptions = () => {
    return [0, 1, 2, 3].map((num) => {
      return <AnswerOption key={num} value={num} answer={renderAnswer(num)} />;
    });
  };

  return (
    <React.Fragment>
      <ScreenContainer>
        {/* Question grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:space-x-4 md:h-72 space-y-2">
          {/* Question */}
          <QuestionBox
            question={renderQuestion()}
            questionProgress={renderQuestionProgress()}
          />
          {/* Answers */}
          <RadioGroup
            className="w-full flex flex-col justify-around space-y-3 md:space-y-0 items-center mx-auto"
            value={selectedMultipleChoiceAnswer}
            onChange={handleAnswerChange}
          >
            <RadioGroup.Label className="hidden">Answer</RadioGroup.Label>
            {renderAnswerOptions()}
          </RadioGroup>
        </div>
        {/* Buttons */}
        <div className="w-full md:w-80 mx-auto">
          <NavigationButtons
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            maxIndex={multipleChoiceQuestions.length - 1}
          />
          <div className="text-center w-full">
            <button
              onClick={handleSubmit}
              className="py-3 bg-blueCrayola rounded-lg text-white font-bold text-xl px-2 w-full"
            >
              Submit all
            </button>
          </div>
        </div>
      </ScreenContainer>
      <ResultsDialog />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMultipleChoiceAnswer:
      state.multipleChoice.selectedMultipleChoiceAnswer,
    hskWords: state.hskWords,
    multipleChoiceQuestions: state.multipleChoice.multipleChoiceQuestions,
    currentQuestion: state.multipleChoice.currentQuestion,
    selectedHsk: state.hsk.selectedHsk,
    isResultsDialogOpen: state.dialog.isResultsDialogOpen,
  };
};

export default connect(mapStateToProps, {
  setSelectedMultipleChoiceAnswer,
  setMultipleChoiceQuestions,
  setCurrentQuestion,
  submitMultipleChoiceQuestions,
  setIsResultsDialogOpen,
})(MultipleChoice);
