import classes from "./Error.module.css";
import netflix from "../Layout/580b57fcd9996e24bc43c529.png";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className={classes.Error}>
      <div className={classes.head}>
        <img src={netflix} alt="logo" />
      </div>
      <div className={classes.content}>
        <h1>Lost your way?</h1>
        <p>
          Sorry, we can't find that page. You'll find loads to explore on the
          home page.
        </p>
        <Link to="/home">
          <button>Netflix Home</button>
        </Link>
        <div className={classes.err404}>
          <span>Error Code </span>
          <span>NSES-404</span>
        </div>
      </div>
      <div className={classes.foot}>
        <span>FROM </span>
        <span>LOST IN SPACE</span>
      </div>
    </div>
  );
};
export default Error;
