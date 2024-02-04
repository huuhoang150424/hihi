import { useState,useEffect } from "react";
import { NavLink,Route,Routes } from "react-router-dom";




import Main from "./Shared/components/layout/Main";
import HomePage from "./page/HomePage";
import Banner from "./Shared/components/banner/Banner";
import MoviePage from "./page/MoviePage";
import MovieDentail from "./page/MovieDentail";
import MovieList from "./Shared/components/movie/MovieList";
import MovieLoading from "./Shared/components/movie/MovieLoading";


//https://api.themoviedb.org/3/movie/now_playing?api_key=a5b692f1e38e6925f4563af80a52e8c1
function App() {

  return (
    <div>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={
            <>
              <Banner></Banner>
              <HomePage></HomePage>
            </>
          }>
          </Route>
          <Route path="/movies" element={<>
            <MoviePage></MoviePage>
          </>}></Route>
          <Route 
            path="/movies/movie-:id" 
            element={
            <>
              <MovieDentail></MovieDentail>
            </>
            }></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
