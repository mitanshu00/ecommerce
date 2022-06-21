import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "../../store/slice/register-slice";
import { sendRegisterData } from "../../store/action/register-actions";
import { Link } from "react-router-dom";
import classes from "./login.module.css";

function Register() {
  const dispatch = useDispatch();
  const enteredName = useSelector((state) => state.register.name);
  const enteredPhone = useSelector((state) => state.register.phone);
  const enteredRegEmail = useSelector((state) => state.register.email);
  const enteredRegPassword = useSelector((state) => state.register.password);

  const enteredNameTouched = useSelector(
    (state) => state.register.isTouched.name
  );
  const enteredPhoneTouched = useSelector(
    (state) => state.register.isTouched.phone
  );
  const enteredMailTouched = useSelector(
    (state) => state.register.isTouched.email
  );
  const enteredPasswordTouched = useSelector(
    (state) => state.register.isTouched.password
  );

  const enteredNameIsValid = enteredName.trim().length > 0;
  const NameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredPhoneIsValid = enteredPhone.trim().length < 11;
  const PhoneIsInValid = !enteredPhoneIsValid && enteredPhoneTouched;

  const enteredMailIsValid = enteredRegEmail.includes("@");
  const EmailIsInvalid = !enteredMailIsValid && enteredMailTouched;

  const enteredPasswordIsValid = enteredRegPassword.trim().length > 7;
  const PasswordIsInValid = !enteredPasswordIsValid && enteredPasswordTouched;

  const NameInputChangeHandler = (event) => {
    dispatch(registerActions.nameChangeHandler(event.target.value));
  };

  const PhoneChangeHandler = (event) => {
    dispatch(registerActions.mobileChangeHandler(event.target.value));
  };
  const EmailInputChangeHandler = (event) => {
    dispatch(registerActions.emailChangeHandler(event.target.value));
  };
  const passwordChangeHandler = (event) => {
    dispatch(registerActions.passwordChangeHandler(event.target.value));
  };
  const NameBlurHandler = (event) => {
    dispatch(registerActions.nameBlurHandler());
  };
  const PhoneBlurHandler = (event) => {
    dispatch(registerActions.mobileBlurHandler());
  };
  const EmailBlurHandler = (event) => {
    dispatch(registerActions.emailBlurHandler());
  };
  const PasswordBlurHandler = (event) => {
    dispatch(registerActions.passwordBlurHandler());
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(registerActions.submitHandler());
    dispatch(
      sendRegisterData({
        enteredName,
        enteredPhone,
        enteredRegEmail,
        enteredRegPassword,
      })
    );
  };

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredPhoneIsValid &&
    enteredMailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form onSubmit={submitHandler} className={classes.login}>
          <p className={classes.title}>Sign Up</p>

          <input
            placeholder="Firstname Lastname"
            type="text"
            id="name"
            onChange={NameInputChangeHandler}
            value={enteredName}
            onBlur={NameBlurHandler}
          />
          {NameIsInvalid && (
            <p className={classes.errortext}>Name cannot be empty!</p>
          )}
          <input
            placeholder="Phone No."
            type="text"
            id="phone"
            onChange={PhoneChangeHandler}
            value={enteredPhone}
            onBlur={PhoneBlurHandler}
          />
          {PhoneIsInValid && (
            <p className={classes.errortext}>Enter valid Phone number!</p>
          )}
          {enteredPhone.trim().length < 1 && enteredPhoneTouched && (
            <p className={classes.errortext}>Enter Phone Number!</p>
          )}

          <input
            placeholder="Email ID"
            type="email"
            id="regemail"
            onChange={EmailInputChangeHandler}
            value={enteredRegEmail}
            onBlur={EmailBlurHandler}
          />
          {EmailIsInvalid && (
            <p className={classes.errortext}>Enter Valid E-mail!</p>
          )}
          {enteredRegEmail.trim().length === 0 && enteredMailTouched && (
            <p className={classes.errortext}>This field cannot be empty!</p>
          )}
          <input
            placeholder="Password"
            type="password"
            id="rpwd"
            onChange={passwordChangeHandler}
            value={enteredRegPassword}
            onBlur={PasswordBlurHandler}
          />
          {PasswordIsInValid && (
            <p className={classes.errortext}>Enter valid Password!</p>
          )}
          {enteredRegPassword.trim().length === 0 && enteredPasswordTouched && (
            <p className={classes.errortext}>Please Enter Password!</p>
          )}
          <div className={classes.link}>
            <Link to="/login" style={{ color: "#000" }}>
              Existing User ? Sign in
            </Link>
          </div>

          <div className={classes.formactions}>
            <button disabled={!formIsValid}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
