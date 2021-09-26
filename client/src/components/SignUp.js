import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setIsDialogOpen, signUp } from "../actions";

import SignUpForm from "./SignUpForm";
import SignInDialog from "./SignInDialog";

let delayedSignInDialog = null;

const SignUp = ({ setIsDialogOpen, signUp }) => {
  useEffect(() => {
    delayedSignInDialog = <SignInDialog />;
    return function cleanup() {
      delayedSignInDialog = null;
    };
  }, []);

  const onFormSubmit = (formValues) => {
    signUp(formValues);
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen font-sans">
        <div className="mt-16 md:mt-0 flex flex-col items-center justify-center">
          <div className="mx-auto w-72 px-5 py-8 shadow-lg">
            <h3 className="text-xl font-semibold pb-8">Sign Up</h3>
            <SignUpForm isSignUp={true} onFormSubmit={onFormSubmit} />
          </div>
          <div className="mx-auto w-72 px-4 py-8">
            <p>If you already have an account</p>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="text-center text-blueCrayola"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="hidden md:block bg-signUp-pattern bg-cover bg-center m-3 rounded-xl">
          <div className="mx-auto w-max flex flex-col justify-center h-full">
            <div>
              <h2 className="text-semiWhite font-semibold text-center text-7xl flex flex-col">
                <span>Get Ready to</span>
                <span>Ace your HSK!</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {delayedSignInDialog}
    </React.Fragment>
  );
};

export default connect(null, { setIsDialogOpen, signUp })(SignUp);
