import React from 'react';
import MovieList from '../Shared/components/movie/MovieList';
const HomePage = () => {
    return (
        <div>

            <section className="page-container-fluid pb-10 ">
                <h2 className="capitalize text-white mb-10 text-3xl font-bold">Now Playing</h2>
                <MovieList type={"now_playing"}></MovieList>
            </section>
            <section className="page-container-fluid pb-10 ">
                <h2 className="capitalize text-white mb-10 text-3xl font-bold">Top Rated</h2>
                <MovieList type="top_rated"></MovieList>
            </section>
            <section className="page-container-fluid pb-10 ">
                <h2 className="capitalize text-white mb-10 text-3xl font-bold">Trending</h2>
                <MovieList type="popular"></MovieList>
            </section>
        </div>
    );
};

export default HomePage;