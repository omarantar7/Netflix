import { Fragment, useEffect, useRef } from "react";
import classes from "./Row.module.css";
import RowItem from "./RowItem";
import { getNetflixRow } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import Skeleton from "../UI/skeleton";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

const RowNetflix = (props) => {
  const refSlide = useRef();
  const slideHandler = (slider) => {
    refSlide.current.scrollLeft += slider; 
  };

  const {
    sendRequest,
    status,
    data: loadedRow,
    error,
  } = useHttp(getNetflixRow, true);

  useEffect(() => {
    sendRequest(props.type);
  }, [sendRequest, props.type]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (status === "completed" && (!loadedRow || loadedRow.length === 0)) {
    return <p>no Movies Found</p>;
  }
  return (
    <Fragment>
      <div className={classes.row}>
        <h2>{props.overview}</h2>
        <div className={classes["row__posters"]} ref={refSlide}>
          {loadedRow.map((movie) => (
            <RowItem
              key={movie.id}
              id={movie.id}
              image={movie.image}
              title={movie.title}
              descr={movie.descr}
            />
          ))}
        </div>
        <div className={classes.forward}>
          <IoChevronForward className={classes.forwardIcon} onClick={()=>{slideHandler(1200)}}/>
        </div>
        <div className={classes.backward}>
          <IoChevronBack className={classes.backwardIcon} onClick={()=>{slideHandler(-1200)}}/>
        </div>
      </div>
    </Fragment>
  );
};

export default RowNetflix;
