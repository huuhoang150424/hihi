
import useSWR from "swr";
import {SwiperSlide,Swiper} from "swiper/react";
import "swiper/scss"

import {fetcher} from "../../../config"
import { Api_key1 } from "../../Constant/app";

import MovieCard from './MovieCard';
import MovieLoading from "./MovieLoading";
const MovieList = ({type='now_playing'}) => {
    const {data,isLoading }=useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=${Api_key1}`,fetcher)
    if (isLoading) return <MovieLoading/>
    return (
        <div className="movie-list">
            <Swiper grabCursor={"true"} spaceBetween={30} slidesPerView={"auto"}>
                {data.results.length>0 && data.results.map((item)=>{
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