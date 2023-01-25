import React from "react";
import Row from "../components/Rows/Row";
import Navbar from "../components/Layout/navbar";
import Banner from "../components/banner/Banner";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row overview="Netflix Originals" type="netflix" />
      <Row overview="Trending Now" type="trending" />
      <Row overview="Top Rated" type="topRated" />
    </div>
  );
};

export default Home;
