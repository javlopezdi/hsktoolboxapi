import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signInWithToken } from "../actions";

const Home = ({ signInWithToken }) => {
  useEffect(() => {
    if (document.cookie) {
      signInWithToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-hero-pattern h-screen bg-cover bg-center font-sans text-richBlack">
      {/* Container */}
      <div className="container max-w-full w-max mx-auto h-full flex flex-col items-center md:items-start justify-center px-5">
        <div>
          <h2 className="text-center md:text-left text-3xl md:text-6xl font-semibold md:py-8 break-normal">
            The best tools to practice for your HSK
          </h2>
        </div>
        <div>
          <h3 className="text-center md:text-left text-xl md:text-4xl py-8 break-normal">
            Just Sign Up and start practicing, all your progress is saved!
          </h3>
        </div>
        <Link to="/signup" className="mt-32 md:mt-0 md:mb-32 w-max">
          <button className=" text-semiWhite rounded bg-blueCrayola py-3 px-5 text-2xl font-semibold transition duration-200 transform hover:-translate-y-0.5 hover:shadow-md">
            Start practicing!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default connect(null, { signInWithToken })(Home);
