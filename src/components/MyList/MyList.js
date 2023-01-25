import classes from './MyList.module.css';
import { useSelector } from "react-redux";
import MyListItem from "./MyListItem";
const MyList = () => {
    const ListItems = useSelector((state) => state.List.items);
    const hasItem = useSelector((state) => state.List.items.length === 0);
    
  return (
    <div className={classes.all}>
      {!hasItem && <h1>My List</h1>}
      <ul>
      {!hasItem ? (ListItems.map((item) => (
        <MyListItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
        />
        ))) : (<h3 className={classes.parag}>Your List Is Empty</h3>)}
      </ul>
    </div>
  );
};
export default MyList;
