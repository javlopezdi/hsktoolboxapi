import React from "react";
import PracticeCard from "./PracticeCard";
import MultipleChoiceIcon from "./svgs/MultipleChoiceIcon";
import MatchingGameIcon from "./svgs/MatchingGameIcon";
import CompleteSentenceIcon from "./svgs/CompleteSentenceIcon";

const Practice = () => {
  return (
    <div>
      <div className="container mx-auto px-5">
        {/* Title */}
        <div className="pt-24 pb-8">
          <h2 className="text-6xl text-center">Practice</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-16 py-16">
          <PracticeCard
            title="Multiple Choice"
            link="multiple"
            disabled={false}
          >
            <MultipleChoiceIcon className="w-full p-12" />
          </PracticeCard>
          <PracticeCard title="Matching Game" link="matching" disabled={false}>
            <MatchingGameIcon className="w-full p-12" />
          </PracticeCard>
          <PracticeCard
            title="Complete the sentence"
            link="complete"
            disabled={true}
          >
            <CompleteSentenceIcon className="w-full p-12" />
          </PracticeCard>
        </div>
      </div>
    </div>
  );
};

export default Practice;
