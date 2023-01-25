import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { listActions } from "../../store/List";
import { truncate } from "../../lib/api";
import classes from "./banner.module.css";

const Banner = () => {
  const img1 =
    "https://image.tmdb.org/t/p/original//56v2KjBlU4XaOv9rVYEQypROD7P.jpg";
  const img2 =
    "https://image.tmdb.org/t/p/original//s1xnjbOIQtwGObPnydTebp74G2c.jpg";
  const img3 =
    "https://image.tmdb.org/t/p/original//xkKIruOg4NoADdPjJJrvfiJHRdZ.jpg";
  const img4 =
    "https://image.tmdb.org/t/p/original//iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg";
  const img5 =
    "https://occ-0-3312-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVLn6xY1bOI5mPeAZpU6v7wafhinJ0mnG3D1TKZM_Zv79mQIdxW9P41ZGyMcyxN4xI5vhRMyfF_6F4tsKCKxsGrXirLt-h32Ar1B.jpg?r=077";
  const img6 = "https://wallpapercave.com/wp/wp6581266.jpg";
  const img7 =
    "https://occ-0-3312-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW2vHT_kRiIFO3spVWZwdWkXcxqJNrqkwN9mRw8q-yiY0hi3ho64Ce5nh3QXG4F5oaEZUDNYCWK8y-aKlaUMEsTmOd3mOZwIfvEQ.jpg?r=0b1";
  let [lsNum, setLsNum] = useState(0);

  let count = useRef(1);
  let title;
  let overview;
  let ID = "n1";
  const List = [img1, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    const lS = Number(localStorage.getItem("image"));

    if (lS >= 6) {
      localStorage.setItem("image", 0);
      return;
    }

    count.current = count.current + lS;

    setLsNum(count.current);

    localStorage.setItem("image", count.current);
  }, []);

  switch (lsNum) {
    case 0:
      title = "Stranger Things";
      overview =
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.";
      ID = "n8";
      break;
    case 1:
      title = "1899";
      overview =
        "Passengers on an immigrant ship traveling to the new continent get caught in a mysterious riddle when they find a second vessel adrift on the open sea.";
      ID = "n7";
      break;
    case 2:
      title = "Emily in Paris";
      overview =
        "When ambitious Chicago marketing exec Emily unexpectedly lands her dream job in Paris, she embraces a new life as she juggles work, friends and romance.";
      ID = "n10";
      break;
    case 3:
      title = "Wednesday";
      overview =
        "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.";
      ID = "n1";
      break;
    case 4:
      title = "Dark";
      overview =
        "Children start vanishing from the German town of Winden, bringing to light the fractured relationships, double lives, and the dark pasts of four families living there, and unfurling a mystery that spans four generations.";
      ID = "n20";
      break;
    case 5:
      title = "Money Heist";
      overview =
        "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.";
      ID = "n5";
      break;
    case 6:
      title = "Squid Game";
      overview =
        "Hundreds of cash-strapped players accept a strange invitation to compete in childrens games. Inside, a tempting prize awaits — with deadly high stakes.";
      ID = "n122";
      ID = "tv5";
      break;
    default:
      title = '';
      overview ='';
      ID = '';
  }

  const dispatch = useDispatch();

  const onAddToListHandler = () => {
    dispatch(
      listActions.addItemToList({
        id: ID,
        title: title,
        image: List[lsNum],
      })
    );
  };

  return (
    <header
      className={classes.banner}
      style={{
        backgroundImage: `url('${List[lsNum]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className={classes["banner__contents"]}>
        <h1 className={classes["banner__title"]}>{title}</h1>
        <div className={classes["banner__buttons"]}>
          <Link to={`/netflix-detail/${ID}`}>
            <button>
              <FaPlay /> Play
            </button>
          </Link>
          <button onClick={onAddToListHandler}>
            <BsPlusLg /> My List
          </button>
        </div>
        <h1 className={classes["banner__descr"]}>{truncate(overview, 150)}</h1>
      </div>
      <div className={classes["fade__bottom"]} />
    </header>
  );
};

export default Banner;
