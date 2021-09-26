import React from "react";

const CompleteSentence = () => {
  return (
    <div className="h-screen">
      {/* Container */}
      <div className="lg:px-48 container mx-auto px-5 h-full flex flex-col justify-center space-y-4">
        <div>
          <h2 className="text-2xl">Complete the sentence</h2>
        </div>
        {/* Question flex */}
        <div className="space-x-4 h-72 xl:h-96 bg-platinum flex justify-center items-center rounded-3xl">
          <p className="text-xl">
            你爸爸妈妈忙 <input className="p-1 text-center rounded" /> 吗？
          </p>
        </div>
        <div className="flex justify-center space-x-8 py-8">
          <div>
            <button className="py-3 bg-blueCrayola rounded-lg flex text-white font-bold text-xl items-center w-36 justify-center px-2">
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
            <button className="py-3 bg-blueCrayola rounded-lg flex text-white font-bold text-xl items-center w-36 justify-center px-2">
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
      </div>
    </div>
  );
};

export default CompleteSentence;
