import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store/slice/formSlice";
import { Link } from "react-router-dom";
import { sendFormData } from "../../store/action/form-actions";

function Login() {
  const dispatch = useDispatch();
  const enteredEmail = useSelector((state) => state.login.email);
  const enteredPassword = useSelector((state) => state.login.password);

  const enteredMailTouched = useSelector(
    (state) => state.login.isTouched.email
  );
  const enteredPasswordTouched = useSelector(
    (state) => state.login.isTouched.password
  );

  const enteredMailIsValid = enteredEmail.includes("@");
  const EmailIsInvalid = !enteredMailIsValid && enteredMailTouched;

  const enteredPasswordIsValid = enteredPassword.trim().length > 7;
  const PasswordIsInValid = !enteredPasswordIsValid && enteredPasswordTouched;

  let formIsValid = false;

  if (enteredMailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const EmailInputChangeHandler = (event) => {
    dispatch(formActions.emailChangeHandler(event.target.value));
  };
  const passwordChangeHandler = (event) => {
    dispatch(formActions.passwordChangeHandler(event.target.value));
  };
  const EmailBlurHandler = (event) => {
    dispatch(formActions.emailBlurHandler());
  };
  const PasswordBlurHandler = (event) => {
    dispatch(formActions.passwordBlurHandler());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(formActions.submitHandler());
    dispatch(
      sendFormData({
        enteredEmail,
        enteredPassword,
      })
    );
  };

  const EmailInputClasses = EmailIsInvalid
    ? "form-control invalid"
    : "form-control";
  const PasswordClasses = PasswordIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler} className="app">
      <div className={EmailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={EmailInputChangeHandler}
          value={enteredEmail}
          onBlur={EmailBlurHandler}
        />
        {EmailIsInvalid && <p className="error-text">Enter Valid E-mail!</p>}
      </div>
      <div className={PasswordClasses}>
        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          id="pwd"
          onChange={passwordChangeHandler}
          value={enteredPassword}
          onBlur={PasswordBlurHandler}
        />
        {PasswordIsInValid && (
          <p className="error-text">Enter valid Password!</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>

      <div>
        <Link to="/register">New User ? register</Link>
      </div>
    </form>
  );
}

export default Login;
