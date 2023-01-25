import { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "../UI/Modal";
import Loading from "../UI/LoadingSpiner";
import useHttp from "../../hooks/use-http";
import { getNetflixRow } from "../../lib/api";
import SearchResult from "./Search-Result";

const SearchBar = (props) => {
  const [filterData, setFilterData] = useState([]);

  const {
    sendRequest,
    status,
    error,
    data: loadedResult,
  } = useHttp(getNetflixRow, true);

  useEffect(() => {
    sendRequest("All");
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div style={{ marginRight: "65rem" }}>
        <Loading />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (status === "completed" && (!loadedResult || loadedResult.length === 0)) {
    return <p>no Movies Found</p>;
  }

  const changeFilterHandler = (event) => {
    const enteredTitle = event.target.value;
    const searchTitle = loadedResult.filter((value) => {
      return value.title.toString().toLowerCase().includes(enteredTitle);
    });
    if (enteredTitle === "") {
      setFilterData([]);
    } else {
      setFilterData(searchTitle);
    }
  };
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.field}>
        <input
          type="text"
          placeholder="Search..."
          onChange={changeFilterHandler}
          autoFocus
        />
        <AiOutlineSearch className={classes.searchIcon} />
      </div>

      {filterData.length !== 0 ? (
        <div className={classes.result}>
          {filterData.map((search) => (
            <SearchResult
              key={search.id}
              id={search.id}
              title={search.title}
              image={search.image}
            />
          ))}
        </div>
      ) : (
        <h1 className={classes.nofound}>No Movie Found</h1>
      )}
    </Modal>
  );
};
export default SearchBar;
