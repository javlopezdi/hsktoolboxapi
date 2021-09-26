import React from "react";
import { connect } from "react-redux";
import { Dialog } from "@headlessui/react";
import { setIsMatchingGameDialogOpen } from "../../actions";

const MatchingGameDialog = ({
  setIsMatchingGameDialogOpen,
  isMatchingGameDialogOpen,
}) => {
  return (
    <Dialog
      open={isMatchingGameDialogOpen}
      onClose={() => setIsMatchingGameDialogOpen(false)}
      className="fixed z-25 inset-0"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
        <div className="bg-semiWhite z-30 rounded-3xl max-w-sm mx-auto py-12 px-8 space-y-5 text-center w-72 shadow-xl text-xicatic">
          <Dialog.Title className={`text-2xl font-semibold`}>
            Nice job!
          </Dialog.Title>
          <p className="text-lg py-8">You matched all the cards</p>
          <button
            onClick={() => setIsMatchingGameDialogOpen(false)}
            className="mt-4 py-3 bg-blueCrayola rounded-lg text-white font-bold text-xl px-8 text-center"
          >
            Continue
          </button>
        </div>
      </div>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    isMatchingGameDialogOpen: state.matchingGame.isMatchingGameDialogOpen,
  };
};

export default connect(mapStateToProps, { setIsMatchingGameDialogOpen })(
  MatchingGameDialog
);
