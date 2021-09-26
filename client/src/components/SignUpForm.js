import React from "react";
import { Field, reduxForm } from "redux-form";

class SignUpForm extends React.Component {
  onFormSubmit = (formValues) => {
    this.props.onFormSubmit(formValues);
  };

  required = (value) => (value ? undefined : "Required");
  email = (value) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? undefined
      : "Please enter a valid email";
  password = (value) =>
    value.length < 8 ? "Password must have at least 8 characters" : undefined;

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <input
          className={`w-full p-1 border-2 rounded ${
            meta.error && meta.submitFailed
              ? "border-red-600 placeholder-red-600 bg-red-100 bg-opacity-20"
              : ""
          }`}
          {...input}
          type={input.name === "password" ? "password" : "text"}
          autoComplete="off"
          placeholder={label}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, submitFailed }) {
    if (error && submitFailed) {
      return <div className="text-red-600 text-xs">{error}</div>;
    }
  }

  render() {
    return (
      <div>
        <form
          className="space-y-3"
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        >
          <Field
            name="firstName"
            component={this.renderInput}
            label="First Name"
            validate={this.required}
          />
          <Field
            name="lastName"
            component={this.renderInput}
            label="Last Name"
            validate={this.required}
          />
          <Field
            name="email"
            component={this.renderInput}
            label="Email"
            validate={[this.required, this.email]}
          />
          <Field
            name="password"
            component={this.renderInput}
            label="Password"
            validate={[this.required, this.password]}
          />
          <button className="rounded bg-blueCrayola text-semiWhite py-2 px-4 w-full text-lg font-semibold">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "signUpForm",
})(SignUpForm);
