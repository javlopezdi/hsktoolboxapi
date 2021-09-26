import React from "react";
import { connect } from "react-redux";
import { Dialog } from "@headlessui/react";
import { signIn } from "../actions";
import { setIsDialogOpen } from "../actions";
import SignInForm from "./SignInForm";

const SignInDialog = ({ setIsDialogOpen, isDialogOpen, signIn }) => {
  const onFormSubmit = (formValues) => {
    try {
      signIn(formValues);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      className="fixed z-25 inset-0"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
        <div className="bg-semiWhite z-30 rounded-3xl max-w-sm mx-auto py-12 px-8 space-y-5 text-center w-72 shadow-xl text-xicatic">
          <Dialog.Title className={`text-lg font-semibold`}>
            Sign In
          </Dialog.Title>
          <SignInForm isSignUp={false} onFormSubmit={onFormSubmit} />
        </div>
      </div>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    isDialogOpen: state.dialog.isDialogOpen,
  };
};

export default connect(mapStateToProps, { setIsDialogOpen, signIn })(
  SignInDialog
);
