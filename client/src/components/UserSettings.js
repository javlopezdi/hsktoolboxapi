import React from "react";
import { connect } from "react-redux";
import { setSelectedHsk } from "../actions";

import HskOption from "./HskOption";
import RegularContainer from "./containers/RegularContainer";

const UserSettings = ({ setSelectedHsk }) => {
  const onOptionClick = (value) => {
    setSelectedHsk(value);
  };

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
            pandaImage="first-panda"
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
            pandaImage="second-panda"
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
            pandaImage="third-panda"
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
            pandaImage="fourth-panda"
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
            pandaImage="fifth-panda"
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
            pandaImage="sixth-panda"
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
