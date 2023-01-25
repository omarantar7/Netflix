import React from 'react';
import classes from './sekeleton.module.css';

function Skeleton() {
  return (
    <div className={classes.all}>
        <div className={classes.first}/>
        <div className={classes.second}/>
        <div className={classes.third}/>
    </div>
  )
}

export default Skeleton