import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "./store/formSlice";
import { Link } from "react-router-dom";
import { sendFormData } from "./store/form-actions";
import classes from "./login.module.css";

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

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form onSubmit={formSubmitHandler} className={classes.login}>
          <p className={classes.title}>Sign In</p>

          <input
            placeholder="Email ID"
            type="email"
            id="email"
            onChange={EmailInputChangeHandler}
            value={enteredEmail}
            onBlur={EmailBlurHandler}
          />
          {EmailIsInvalid && (
            <p className={classes.errortext}>Enter Valid E-mail!</p>
          )}
          <input
            placeholder="Password"
            type="password"
            id="pwd"
            onChange={passwordChangeHandler}
            value={enteredPassword}
            onBlur={PasswordBlurHandler}
          />
          {PasswordIsInValid && (
            <p className={classes.errortext}>Enter valid Password!</p>
          )}

          <div className={classes.link}>
            <Link to="/register" style={{ color: "#000" }}>
              New User ? register
            </Link>
          </div>
          <div className={classes.formactions}>
            <button disabled={!formIsValid}>Sign-In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
