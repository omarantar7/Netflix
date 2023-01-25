import Navbar from "../components/Layout/navbar";
import Row from "../components/Rows/Row";

const TvShows = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={{
          marginTop: "7rem",
          marginBottom: "2rem",
          marginLeft: "2rem",
          color: "#cc2200",
        }}
      >
        Netflix Series
      </h1>
      <Row overview="Popular Series" type="tvshows" />
      <Row overview="Scifi & Fantasy" type="tvScifi" />
      <Row overview="Crime Tv Dramas" type="tvCrime" />
    </div>
  );
};

export default TvShows;
