import { useState,useEffect } from "react";
import useSWR from "swr";
import {SwiperSlide,Swiper} from "swiper/react";
import "swiper/scss"

import {fetcher} from "../../../config"
import { Api_key1 } from "../../Constant/app";

import MovieCard from './MovieCard';
const MovieList = ({type='now_playing'}) => {
    const {data,error}=useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=${Api_key1}`,fetcher)
    const movies=data?.results || []
    return (
        <div className="movie-list">
            <Swiper grabCursor={"true"} spaceBetween={30} slidesPerView={"auto"}>
                {movies.length>0 && movies.map((item)=>{
                    return (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default MovieList;