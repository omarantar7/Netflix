import classes from "./MyListItem.module.css";
import { useDispatch } from "react-redux";
import { listActions } from "../../store/List";
import { Link } from "react-router-dom";
const MyListItem = (props) => {
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(listActions.removeItemFromList(props.id));
  };
  return (
    <div className={classes.item}>
      <Link to={`/netflix-detail/${props.id}`}>
        <div className={classes.it}>
          <li>
            <img src={props.image} alt={props.title} />
          </li>
          <li>
            <h2>{props.title}</h2>
          </li>
        </div>
      </Link>
      <li className={classes.icon} onClick={removeItemHandler}>
        x
      </li>
    </div>
  );
};

export default MyListItem;
