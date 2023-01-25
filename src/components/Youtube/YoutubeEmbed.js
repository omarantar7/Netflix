import React from "react";
import PropTypes from "prop-types";
import classes from './Youtube.module.css';
import style from '../UI/Loading.module.css';
const YoutubeEmbed = (props) => {

 return <React.Fragment>
  { <div className={classes.bg}>
    <div className={classes['video-responsive']}>
    <h1>Play trailer</h1>
    <h2 onClick={props.sethide}>X</h2>
    <div className={`${style.rotate} ${classes.load}`}/>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    </div>
  </div>}
  </React.Fragment>
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
