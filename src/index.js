import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader /> {/* New Header  */}
      <Routes>
        <Route path="/reviews/:id" element={<MovieReviewPage />} />
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
