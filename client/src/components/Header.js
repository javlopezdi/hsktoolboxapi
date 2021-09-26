import React from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setIsDialogOpen } from "../actions";
import { signOut } from "../actions";
import { Menu } from "@headlessui/react";
import LogoMenu from "./svgs/LogoMenu";

import Logo from "./svgs/Logo";
import SignInDialog from "./SignInDialog";

const Header = ({ setIsDialogOpen, isSignedIn, signOut, selectedHsk }) => {
  let location = useLocation().pathname;

  const handleSignOut = () => {
    signOut();
  };

  const renderMobileNavOptions = () => {
    return isSignedIn ? (
      <>
        <Menu.Item className="text-left py-4 px-8">
          {({ active }) => (
            <Link
              className="transition duration-200 hover:text-white transform hover:-translate-y-0.5"
              to={`/hsk${selectedHsk}/progress`}
            >
              Progress
            </Link>
          )}
        </Menu.Item>
        <Menu.Item className="text-left py-4 px-8">
          {({ active }) => (
            <Link
              className="transition duration-200 hover:text-white transform hover:-translate-y-0.5"
              to={`/hsk${selectedHsk}/practice`}
            >
              Practice
            </Link>
          )}
        </Menu.Item>
        <Menu.Item className="text-left py-4 px-8">
          {({ active }) => (
            <Link
              className="transition duration-200 hover:text-white transform hover:-translate-y-0.5"
              to="/usersettings"
            >
              Settings
            </Link>
          )}
        </Menu.Item>
        <Menu.Item className="text-left py-4 px-8">
          {({ active }) => (
            <button
              className="transition duration-200 hover:text-white transform hover:-translate-y-0.5"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}
        </Menu.Item>
      </>
    ) : (
      <>
        <Menu.Item className="text-left py-4 px-8">
          {({ active }) => (
            <button
              className="transition duration-200 hover:text-white transform hover:-translate-y-0.5"
              onClick={() => setIsDialogOpen(true)}
            >
              Sign In
            </button>
          )}
        </Menu.Item>
        <Menu.Item className="text-left py-4 px-8">
          {({ active }) => (
            <button
              className="transition duration-200 hover:text-white transform hover:-translate-y-0.5"
              onClick={() => true}
            >
              Sign Up
            </button>
          )}
        </Menu.Item>
      </>
    );
  };

  return (
    <nav
      className={`${
        location === "/" ? "" : "bg-semiWhite"
      } text-richBlack fixed justify-between w-full font-sans flex flex-row py-2 px-5 md:px-8 text-lg items-center z-20`}
    >
      {/* Logo */}
      <Link to="/">
        <button className="flex flex-row space-x-4 items-center font-bold">
          <Logo className="w-28 h-14" />
        </button>
      </Link>
      {/* Nav options */}
      {isSignedIn ? (
        <div
          className={`${
            location === "/signup" ? "hidden" : "md:flex"
          } space-x-8 hidden`}
        >
          <Link to={`/hsk${selectedHsk}/progress`}>
            <button className="font-semibold">Progress</button>
          </Link>
          <Link to={`/hsk${selectedHsk}/practice`}>
            <button className="font-semibold">Practice</button>
          </Link>
          <Link to="/usersettings">
            <button className="font-semibold">Settings</button>
          </Link>
          <button onClick={handleSignOut} className="font-semibold">
            Sign Out
          </button>
        </div>
      ) : (
        <div
          className={`${
            location === "/signup" ? "hidden" : "md:flex"
          } space-x-8 hidden`}
        >
          <button
            onClick={() => setIsDialogOpen(true)}
            className="font-semibold"
          >
            Sign In
          </button>

          <Link to="/signup">
            <button className="font-semibold">Sign Up</button>
          </Link>
          <SignInDialog />
        </div>
      )}
      <Menu>
        <Menu.Button className="md:hidden">
          <LogoMenu logoClass="h-10 w-10" />
        </Menu.Button>
        <Menu.Items className="fixed top-16 right-0 w-56 grid grid-cols-1 divide-y bg-semiWhite rounded-xl">
          {renderMobileNavOptions()}
        </Menu.Items>
      </Menu>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    selectedHsk: state.hsk.selectedHsk,
  };
};

export default connect(mapStateToProps, { setIsDialogOpen, signOut })(Header);
