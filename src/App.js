import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AlertBox from "./components/AlertBox/AlertBox";

const Home = React.lazy(() => import("./pages/Home"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const NetflixDetail = React.lazy(() => import("./pages/netflix-detail"));
const SignupPage = React.lazy(() => import("./pages/signupPage"));
const MyListPage = React.lazy(() => import("./pages/MyListPage"));
const TvShows = React.lazy(() => import("./pages/TvShows"));
const Movie = React.lazy(() => import("./pages/Movie"));
const ErrorPage = React.lazy(() => import("./pages/Error-404-Page"));
const SignInPage = React.lazy(() => import("./pages/SigninPage"));

function App() {
  const isLoggedIn = useSelector((state) => state.auth.islogeddIn);
  return (
    <div>
      <Suspense
        fallback={
          <div className="center"/>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/lb-en" />}
          />
          <Route
            path="/MyList"
            element={isLoggedIn ? <MyListPage /> : <Navigate to="/lb-en" />}
          />
          <Route
            path="/Movies"
            element={isLoggedIn ? <Movie /> : <Navigate to="/lb-en" />}
          />
          <Route
            path="/TvShows"
            element={isLoggedIn ? <TvShows /> : <Navigate to="/lb-en" />}
          />
          <Route
            path="/netflix-detail/:movieId"
            element={isLoggedIn ? <NetflixDetail /> : <Navigate to="/lb-en" />}
          />
          <Route
            path="/lb-en"
            element={!isLoggedIn ? <LoginPage /> : <Navigate to="/home" />}
          />
          <Route
            path="/lb-en/signup"
            element={!isLoggedIn ? <SignupPage /> : <Navigate to="/home" />}
          />
          <Route
            path="/lb-en/signin"
            element={!isLoggedIn ? <SignInPage /> : <Navigate to="/home" />}
          />
          <Route path="/NotFound" element={<ErrorPage />} />
          <Route path="/*" element={<Navigate to="/NotFound" />} />
        </Routes>
      </Suspense>
      {isLoggedIn && <AlertBox />}
    </div>
  );
}
export default App;
