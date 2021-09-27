import React from "react";
import { connect } from "react-redux";
import { setSelectedHsk } from "../actions";

import HskOption from "./HskOption";
import RegularContainer from "./containers/RegularContainer";

const UserSettings = ({ setSelectedHsk }) => {
  const onOptionClick = (value) => {
    setSelectedHsk(value);
  };

  const firstPanda =
    "https://images.unsplash.com/photo-1593526492327-b071f3d5333e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  const secondPanda =
    "https://images.unsplash.com/photo-1518247268172-e153ae1a7300?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  const thirdPanda =
    "https://images.unsplash.com/photo-1608475125659-558cd2d12e83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  const fourthPanda =
    "https://images.unsplash.com/photo-1622892735236-a3c8f017d45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  const fifthPanda =
    "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  const sixthPanda =
    "https://images.unsplash.com/photo-1585355597830-654035143d75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1092&q=80";

  return (
    <RegularContainer>
      {/* HSK Section */}
      <div className="pt-8">
        {/* HSK cards */}
        <div>
          <div>
            <h2 className="text-center text-2xl pb-8">Choose your HSK Level</h2>
          </div>
          <HskOption
            onOptionClick={onOptionClick}
            disabled={false}
            value="1"
            title="HSK 1"
            content="This test is intended for students who have studied the
                        chinese language for 1 semester, at least 2 or 3 hours
                        every week. To succeed students must master 150 commonly
                        used words and basic grammar patterns."
            pandaImage={firstPanda}
            isOdd={true}
          />
          <HskOption
            disabled={true}
            value="2"
            title="HSK 2"
            content="This test is intended for students who have studied the
                        chinese language for 2 semesters, at least 2 or 3 hours
                        every week. To succeed students must master 300 commonly
                        used words and basic grammar patterns."
            pandaImage={secondPanda}
            isOdd={false}
          />
          <HskOption
            disabled={true}
            value="3"
            title="HSK 3"
            content="This test is intended for students who have studied the
                        chinese language for 3 semesters, at least 2 or 3 hours
                        every week. To succeed students must master 600 commonly
                        used words and related grammar patterns."
            pandaImage={thirdPanda}
            isOdd={true}
          />
          <HskOption
            disabled={true}
            value="4"
            title="HSK 4"
            content="This test is intended for students who have studied the
                        chinese language for 4 semesters, at least 2 or 3 hours
                        every week. To succeed students must master 1200
                        commonly used words and related grammar patterns."
            pandaImage={fourthPanda}
            isOdd={false}
          />
          <HskOption
            disabled={true}
            value="5"
            title="HSK 5"
            content="This test is intended for students who have studied the
                        chinese language for more than 2 years, at least 2 or 3
                        hours every week. To succeed students must master 2500
                        commonly used words and related grammar patterns."
            pandaImage={fifthPanda}
            isOdd={true}
          />
          <HskOption
            disabled={true}
            value="6"
            title="HSK 6"
            content="This test is intended for students who have studied the
                        chinese language for more than 3 years, at least 2 or 3
                        hours every week. To succeed students must master 5000
                        commonly used words and related grammar patterns."
            pandaImage={sixthPanda}
            isOdd={false}
          />
        </div>
      </div>
    </RegularContainer>
  );
};

export default connect(null, {
  setSelectedHsk,
})(UserSettings);
