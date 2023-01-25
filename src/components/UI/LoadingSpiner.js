import { Fragment } from "react"
import classes from './Loading.module.css';
const LoadingSpiner = () => {
    return <Fragment><div className={classes.bg}>
        <div className={classes.rotate}/>
        </div></Fragment>
}
export default LoadingSpiner