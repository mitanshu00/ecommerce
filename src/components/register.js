import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "./store/register-slice";
import { sendRegisterData } from "./store/register-actions";
import { Link } from "react-router-dom";

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

  const NameInputClasses = NameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const PhoneClasses = PasswordIsInValid
    ? "form-control invalid"
    : "form-control";
  const EmailInputClasses = EmailIsInvalid
    ? "form-control invalid"
    : "form-control";
  const PasswordClasses = PasswordIsInValid
    ? "form-control invalid"
    : "form-control";

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
    <form onSubmit={submitHandler}>
      <div className="app">
        <div className={NameInputClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={NameInputChangeHandler}
            value={enteredName}
            onBlur={NameBlurHandler}
          />
          {NameIsInvalid && <p className="error-text">Enter your name!</p>}
        </div>
        <div className={PhoneClasses}>
          <label htmlFor="phone">Phone No.</label>
          <input
            type="text"
            id="phone"
            onChange={PhoneChangeHandler}
            value={enteredPhone}
            onBlur={PhoneBlurHandler}
          />
          {PhoneIsInValid && (
            <p className="error-text">Enter valid Phone number!</p>
          )}
        </div>

        <div className={EmailInputClasses}>
          <label htmlFor="regemail">Your Email</label>
          <input
            type="email"
            id="regemail"
            onChange={EmailInputChangeHandler}
            value={enteredRegEmail}
            onBlur={EmailBlurHandler}
          />
          {EmailIsInvalid && <p className="error-text">Enter Valid E-mail!</p>}
        </div>
        <div className={PasswordClasses}>
          <label htmlFor="rpwd">Password</label>
          <input
            type="password"
            id="rpwd"
            onChange={passwordChangeHandler}
            value={enteredRegPassword}
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
          <Link to="/">Already User ? Login</Link>
        </div>
      </div>
    </form>
  );
}

export default Register;
