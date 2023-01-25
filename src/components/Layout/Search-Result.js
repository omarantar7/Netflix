import React from "react";
import { Link } from "react-router-dom";
import classes from "./SearchResult.module.css";
const SearchResult = (props) => {
  return (
    <Link to={`/netflix-detail/${props.id}`}>
      <div className={classes.all}>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
};

export default SearchResult;
