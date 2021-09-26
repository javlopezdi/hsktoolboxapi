import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PracticeCard = ({
  title = "Demo title",
  children,
  link,
  selectedHsk,
  disabled = false,
}) => {
  return (
    <Link
      className={`text-center ${disabled ? "opacity-40 cursor-default" : ""}`}
      to={disabled ? "#" : `/hsk${selectedHsk}/practice/${link}`}
    >
      <button
        className={`relative w-72 mx-auto rounded-xl overflow-hidden shadow-xl ${
          disabled
            ? "cursor-default"
            : "transition duration-300 transform hover:-translate-y-2"
        }`}
      >
        {/* Image */}
        <div className="h-72">{children}</div>
        {/* Title */}
        <div className="text-center py-4 bg-blueCrayola">
          <h4 className="text-2xl text-white font-bold">{title}</h4>
        </div>
        {/* Contenido oculto */}
      </button>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return { selectedHsk: state.hsk.selectedHsk };
};

export default connect(mapStateToProps)(PracticeCard);
