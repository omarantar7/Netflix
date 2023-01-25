import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Signin.module.css";
import { useDispatch } from "react-redux";
import { Authactions } from "../../store/auth";
import useInput from "../../hooks/use-input";
import { TiWarningOutline } from "react-icons/ti";
import netflix from "../Layout/580b57fcd9996e24bc43c529.png";
import PassToggle from "../show-hidePass/Pass-Field";
import LoadingAuth from "../UI/LoadingAuth";

const SignIn = (props) => {
  localStorage.getItem("Token");
  
  const [state, setState] = useState({
    Loading:false,
    wrongInput:false
  });

  const {toggle,inputType} = PassToggle();
  const navigate = useNavigate();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@") && value.includes("."));

  const {
    value: enteredPass,
    isValid: enteredPassIsValid,
    hasError: passInputHasError,
    valueChangeHandler: passChangedHandler,
    inputBlurHandler: passBlurHandler,
  } = useInput((value) => value.trim().length > 5 && value.trim().length < 60);

  const dispatch = useDispatch();

  let formIsValid = false;

  if(enteredEmailIsValid&&enteredPassIsValid){
    formIsValid=true;
  }

  const signin = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJple3qN5HATXE9Cxs87hLpWQ6Tnh-iUo",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPass,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            setState(prev => {return{...prev,wrongInput:true}});
          });
        }
      })
      .then((data) => {
        dispatch(Authactions.loginHandler(data.idToken));
        dispatch(Authactions.userLoggedIn());
        navigate("/", { replace: true });
      })
      .catch((err) => {
        setState(prev => {return{...prev,Loading:false}});
      });

    };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredEmailIsValid && !enteredPassIsValid) {
      return;
    }
    setState(prev => {return{...prev,Loading:true}});
    signin();
  };

  const emailInputClasses = emailInputHasError ? "invalid" : "first";

  const passInputClasses = passInputHasError ? "invalid" : "second";

  return (
    <div className={classes.page}>
      <img src={netflix} alt="logo" />
      <div className={classes["signin__page"]}>
        <form onSubmit={submitHandler}>
          <h2>Sign In</h2>
          {state.wrongInput && (
            <div className={classes["worng-message"]}>
              <TiWarningOutline style={{ height: "1.5rem", width: "1.5rem" }} />
              <p style={{ lineHeight: "1rem" }}>
                your password or email isn't correct!!
              </p>
            </div>
          )}
          <div className={classes[emailInputClasses]}>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
          </div>
          {emailInputHasError && (
            <p className={classes["error-text"]}>Please enter a valid email.</p>
          )}
          <div className={classes[passInputClasses]}>
            <input
              type={inputType}
              id="password"
              placeholder="Password"
              value={enteredPass}
              onChange={passChangedHandler}
              onBlur={passBlurHandler}
            />
            <span>{toggle}</span>
          </div>
          {passInputHasError && (
            <p className={classes["error-text"]}>
              Your password must contain between 6 and 60 characters.
            </p>
          )}
          <button disabled={!formIsValid}>{!state.Loading ? "Sign In" : <LoadingAuth/> }</button>
          <h4>
            <span>New to Netflix?</span>
            <Link to="/lb-en">
              <span>Sign up now.</span>
            </Link>
          </h4>
        </form>
      </div>
      <div className={classes.gradient} />
    </div>
  );
};

export default SignIn;
