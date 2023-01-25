import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Layout/navbar";
import SingleMovie from "../components/Movie-det/movi-detail";
import useHttp from "../hooks/use-http";
import { getSingleNetflix } from "../lib/api";
const NetflixDetail = () => {
  const params = useParams();

  const { movieId } = params;

  const {
    sendRequest,
    error,
    status,
    data: loadedMovie,
  } = useHttp(getSingleNetflix, true);

  useEffect(() => {
    sendRequest(movieId);
  }, [sendRequest, movieId]);

  if (status === "pending") {
    return <div className="center" />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (!loadedMovie.title) {
    return <h1>No Movie Found!</h1>;
  }

  return (
    <div>
      <Navbar/>
      <SingleMovie
        id={loadedMovie.id}
        title={loadedMovie.title}
        image={loadedMovie.image}
        descr={loadedMovie.descr}
        trailer={loadedMovie.trailer}
      />
    </div>
  );
};

export default NetflixDetail;
