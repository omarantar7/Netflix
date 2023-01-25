import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "../../lib/api";
import classes from "./Row.module.css";
function RowItem(props) {
  
  return (
    <Link to={`/netflix-detail/${props.id}`}>
    <div className={classes.fix}>
        <img className={classes.imgg} src={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      <p>{truncate(`${props.descr}`, 50)}</p>
    </div>
    </Link>
  );
}

export default RowItem;
