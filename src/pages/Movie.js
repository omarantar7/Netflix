import Navbar from "../components/Layout/navbar";
import Row from "../components/Rows/Row";
const Movie = () => {
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
        Netflix Movies
      </h1>
      <Row overview="Popular Movies" type="popular" />
      <Row overview="Action Movies" type="Action" />
      <Row overview="Hollywood Films" type="holywood" />
    </div>
  );
};

export default Movie;
