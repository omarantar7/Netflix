import classes from "./AlertBox.module.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Fragment, useEffect, useState } from "react";

const AlertBox = () => {
  const [close, setClose] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setClose(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);
  const closeBoxHandler = () => {
    setClose((prev) => !prev);
  };
  return (
    <Fragment>
      {close && (
        <div className={classes.box}>
          <IoCloseCircleSharp
            className={classes.icon}
            onClick={closeBoxHandler}
          />
          <p>
            This Site Has Been Created Using Reactjs with Firebase Database And Auth As A REST
            API, And The Data is fix Not Gonna Change.
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default AlertBox;
