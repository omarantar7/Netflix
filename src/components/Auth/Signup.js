import { useRef, useState } from "react";
import img1 from "../Layout/580b57fcd9996e24bc43c529.png";
import classes from "./signup.module.css";
import { Authactions } from "../../store/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import { TiWarningOutline } from "react-icons/ti";
import PassToggle from "../show-hidePass/Pass-Field";
import LoadingSpiner from "../UI/LoadingSpiner";

const Signup = () => {
  const [state, setState] = useState({
    Loading:false,
    wrongInput:false
  });

  const {toggle,inputType} = PassToggle();

  localStorage.getItem("Token");

  const {
    value: enteredPass,
    isValid: enteredPassIsValid,
    hasError: passInputHasError,
    valueChangeHandler: passChangedHandler,
    inputBlurHandler: passBlurHandler,
  } = useInput((value) => value.trim().length > 5 && value.trim().length < 60);

  let formIsValid = false;

  if(enteredPassIsValid){
    formIsValid=true;
  }

  let mail = localStorage.getItem("mail");
  const enteredEmailRef = useRef(mail);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = () => {
    const enteredEmail = enteredEmailRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJple3qN5HATXE9Cxs87hLpWQ6Tnh-iUo",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPass,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
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
        localStorage.removeItem("mail");
        navigate("/", { replace: true });
      })
      .catch((err) => {
        setState(prev => {return{...prev,Loading:false}});
      });
    };

  const signUpHandler = (event) => {
    event.preventDefault();

    if (!enteredPassIsValid) {
      return;
    }
    setState(prev => {return{...prev,Loading:true}});
    signup();
  };
  return (
    <div className={classes.signup}>
      <div className={classes.layout}>
        <img src={img1} alt="logo" />
        <h3
          onClick={() => {
            navigate("/lb-en/signin", { push: true });
          }}
        >
          Sign In
        </h3>
      </div>
      <div className={classes.content}>
        <span>STEP 1 OF 1</span>
        {state.wrongInput && (
          <p className={classes["worng-message"]}>
            <TiWarningOutline style={{ height: "1.5rem", width: "1.5rem" }} />
            you already signedUp using this email{" "}
            <Link
              to="/lb-en/signin"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              signin?
            </Link>
            or signup with another email!!
          </p>
        )}
        <h1>Create a password to start your membership</h1>
        <h4>
          Just a few more steps and you're finished! We hate paperwork, too.
        </h4>
        <form onSubmit={signUpHandler}>
          <div className={classes.first}>
            <input
              type="email"
              placeholder="Email"
              required
              defaultValue={mail}
              ref={enteredEmailRef}
            />
          </div>
          <div className={classes[passInputHasError ? "invalid" : "second"]}>
            <input
              type={inputType}
              placeholder="Add a password"
              onChange={passChangedHandler}
              onBlur={passBlurHandler}
              value={enteredPass}
            />
            <span>{toggle}</span>
          </div>{passInputHasError && (
              <h4 className={classes["error-text"]}>
                Your password must contain between 6 and 60 characters.
              </h4>
            )}
          <div className={classes.check}>
            <input type="checkbox" />
            <span>Please do not email me Netflix special offers</span>
          </div>
          <button disabled={!formIsValid}>{!state.Loading ? "Sign UP" : <LoadingSpiner/>}</button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
