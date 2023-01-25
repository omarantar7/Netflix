import { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "./580b57fcd9996e24bc43c529.png";
import avatar from "./Netflix-avatar.png";
import { useDispatch } from "react-redux";
import { Authactions } from "../../store/auth";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import SearchBar from "./Search";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  //const [show, setShow] = useState(false);
  //const [shown, setShown] = useState(false);
  //const [isMenu, setIsMenu] = useState(false);
  //const [onSearch, setOnSearch] = useState(false);
  const [state,setState]=useState({
    show:false,
    shown:false,
    isMenu:false,
    onSearch:false
  })
  const menuDrop = () => {
    //setIsMenu((currentMenu) => !currentMenu);
    setState((prev) => {return {...prev,isMenu:!prev.isMenu}})
  };

  const searchHandler = () => {
   // setOnSearch((prev) => !prev);
   setState((prev) => {return {...prev,onSearch:!prev.onSearch}})

  };

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(Authactions.logoutHandler());
  };

  const showSginoutHandler = () => {
//    setShown((prev) => !prev);
    setState((prev) => {return {...prev , shown:!prev.shown}})
};

  const transNavHandler = () => {
    if (window.scrollY > 100) {
      setState((prev) => {return {...prev,show:true}})
    } else {
      setState((prev) => {return {...prev,show:false}})
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transNavHandler);
    return () => window.removeEventListener("scroll", transNavHandler);
  });

  return (
    <div className={`${classes.nav} ${state.show && classes["nav__black"]}`}>
      <div className={classes.navbar}>
        <img src={logo} alt="logo" className={classes.navlogo} />
        <nav
          className={`${classes.list}
            ${state.isMenu && classes["list-toggle"]}`}
        >
          <FaTimes className={classes.close} onClick={menuDrop} />
          <NavLink
            to="/home"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <h4 className={classes.home}>Home</h4>
          </NavLink>
          <NavLink
            to="/TvShows"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <h4 className={classes.tvshows}>TvShows</h4>
          </NavLink>
          <NavLink
            to="/Movies"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <h4 className={classes.movies}>Movies</h4>
          </NavLink>
          <NavLink
            to="/MyList"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <h4 className={classes.mylist}>MyList</h4>
          </NavLink>
          {!state.onSearch && (
          <AiOutlineSearch className={classes.search} onClick={searchHandler} />
        )}
        </nav>
        <FaBars className={classes.icon} onClick={menuDrop} />

       
        {state.onSearch && <SearchBar onClose={searchHandler} />}
        <img
          src={avatar}
          alt="avatar"
          className={classes.navavatar}
          onClick={showSginoutHandler}
        />
        {state.shown && (
          <button className={classes.btn} onClick={signoutHandler}>
            SignOut
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
