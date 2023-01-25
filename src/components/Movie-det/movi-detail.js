import React, { useState } from "react";
import classes from "./movie-detail.module.css";
import YoutubeEmbed from "../Youtube/YoutubeEmbed";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { listActions } from "../../store/List";
import { FaPlay } from "react-icons/fa";
import {FcCheckmark} from "react-icons/fc";
function SingleMovie(props) {
  const [state,setState]=useState({
    youtube:false,
    find:false,
  })
  const trailerHandler = () => {
    setState((prev) => {return {...prev,youtube:!prev.youtube}})
  };
  
  const dispatch = useDispatch();
  const addItemToListHandler = () => {
    dispatch(
      listActions.addItemToList({
        id: props.id,
        title: props.title,
        image: props.image,
      })
    );
    setState((prev) => {return {...prev,find:true}})
  };
  return (
    <div
      className={classes.all}
      style={{
        backgroundImage: `url('${props.image}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={classes.back}>
        <div className={classes.content}>
          <h1>{props.title}</h1>
          <p>{props.descr}</p>
          <div className={classes.buttons}>
            <button onClick={trailerHandler}>
              <FaPlay /> Play Trailer
            </button>
            {!state.find ? <button onClick={addItemToListHandler}>
              <BsPlusLg /> Add To List
            </button> : <button>
              <FcCheckmark /> Added
            </button>}
          </div>
        </div>
      </div>
      {state.youtube && (
        <div>
          <YoutubeEmbed embedId={props.trailer} sethide={trailerHandler} />
        </div>
      )}
    </div>
  );
}

export default SingleMovie;
