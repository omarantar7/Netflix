import classes from "./Login.module.css";
import logo from "../Layout/580b57fcd9996e24bc43c529.png";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
function Login() {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredEmailIsValid) {
    formIsValid = true;
  }

  const navigate = useNavigate();

  localStorage.getItem("mail");

  const sendMailHandler = (event) => {
    event.preventDefault();
    if (!enteredEmailIsValid) {
      return;
    }
    localStorage.setItem("mail", enteredEmail);
    navigate("/lb-en/signup", { push: true });
  };

  const emailInputclasses = emailInputHasError ? "invalid" : "input__form";

  return (
    <div className={classes.login}>
      <div className={classes["login__contents"]}>
        <img className={classes["logo__image"]} src={logo} alt="logo" />
        <Link to="/lb-en/signin">
          <button className={classes["signin__btn"]}>SignIn</button>
        </Link>
        <div className={classes["login__gradient"]} />
      </div>
      <div className={classes["login__body"]}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className={classes[emailInputclasses]}>
          <form onSubmit={sendMailHandler}>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              required
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            <button disabled={!formIsValid}>Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
