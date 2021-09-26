import React from "react";
import { Field, reduxForm, getFormMeta, reset } from "redux-form";
import { connect } from "react-redux";
import { trySignIn } from "../actions";

class SignInForm extends React.Component {
  onFormSubmit = (formValues) => {
    this.props.trySignIn();
    this.props.onFormSubmit(formValues);
    this.props.reset("signInForm");
  };

  renderSignInError() {
    if (this.props.failedSignIn && !this.props.fields.email) {
      return (
        <div className="text-red-600 text-xs text-left">
          Incorrect email or password
        </div>
      );
    }
  }

  renderError({ error, submitFailed }) {
    if (error && submitFailed) {
      return <div className="text-red-600 text-xs text-left">{error}</div>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="">
        <input
          className={`w-full p-1 border-2 rounded ${
            meta.error && meta.submitFailed
              ? "border-red-600 placeholder-red-600 bg-red-100 bg-opacity-20"
              : ""
          }`}
          type={input.name === "password" ? "password" : "text"}
          {...input}
          autoComplete="off"
          placeholder={label}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <form
        className="space-y-3"
        onSubmit={this.props.handleSubmit(this.onFormSubmit)}
      >
        <Field name="email" component={this.renderInput} label="Email" />
        <Field name="password" component={this.renderInput} label="Password" />
        {this.renderSignInError()}
        <button className="rounded bg-blueCrayola text-semiWhite py-2 px-4 w-full text-lg font-semibold">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.email) {
    errors.email = "You must enter an email";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    failedSignIn: state.auth.failedSignIn,
    fields: getFormMeta("signInForm")(state),
  };
};

SignInForm = connect(mapStateToProps, { reset, trySignIn })(SignInForm);

export default reduxForm({
  form: "signInForm",
  validate,
})(SignInForm);
