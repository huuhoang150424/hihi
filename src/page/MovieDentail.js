

import { useParams } from 'react-router-dom';

import useSWR from 'swr';
import { fetcher } from '../config';
import { Api_key1 } from '../Shared/Constant/app';
import {SwiperSlide,Swiper} from "swiper/react";
import "swiper/scss"
import MovieCard from '../Shared/components/movie/MovieCard';





const MovieDentail = () => {

    const {id}=useParams()
    const {data,error}=useSWR(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key1}`,
        fetcher
    )
    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <div className='py-10'>
            <div className="w-full h-[600px] relative mb-10">
                <div className='absolute inset-0 bg-black bg-opacity-30'></div>
                <div className='w-full h-full bg-cover bg-no-repeat'
                    style={{
                        backgroundImage: `url(http://image.tmdb.org/t/p/original/${data?.backdrop_path})`
                    }}
                >
                </div>
            </div>
            <div className='max-w-[800px] h-[400px] mx-auto mb-10'>
                <img
                    className='w-full h-full object-cover rounded-xl -mt-[200px] relative z-10 pb-10'
                    src={`http://image.tmdb.org/t/p/original/${data?.poster_path}`}
                    alt=''
                />
            </div>
            <h1 className='text-3xl text-center font-bold text-white mb-10'>{data?.title}</h1>
            {data?.genres.length>0 && <div className='flex items-center gap-x-5 justify-center mb-[60px]'>
                    {
                        data?.genres.map((item)=>{
                            return (
                                <span
                                    className='py-2 px-4 border border-primary text-primary rounded'
                                    key={item.id}>
                                {item.name}
                                </span>
                            )
                        })
                    }
            </div>}
            <p className='text-center leading-relaxed max-w-[600px] mx-auto mb-10'>{data?.overview}</p>
            <CreateMovie></CreateMovie>
            <MovieVideo></MovieVideo>
            <MovieSimilar></MovieSimilar>
        </div>

    );
};
function CreateMovie() {

    const {id}=useParams()
    const {data,error}=useSWR(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key1}`,
        fetcher
    )
    if (!data) return null
    return (
        <div className='py-10'>
            <h2 className='text-center font-bold text-[40px] mb-10'>Casts</h2>
            <div className='grid grid-cols-4 gap-5'>
                {data?.cast.slice(0,4).map((item)=>{
                    return (
                    <div key={item?.id}>
                        <img 
                            className='w-full h-[350px] object-cover rounded-lg mb-3 cursor-pointer' 
                            src={`http://image.tmdb.org/t/p/original/${item?.profile_path}`} 
                            alt=''
                        />
                        <h3 className='text-[18px] font-[600] text-center'>{item?.name}</h3>
                    </div>

                    )
                })}

            </div>
        </div>
    )
}

function MovieVideo() {
    const {id}=useParams()
    const {data}=useSWR(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_key1}`,
        fetcher
    )
    if (!data) return null

    
    return (

        <div className='py-10 w-full '>
            <div className='flex flex-col gap-10'>
            {
                data?.results.slice(0,2).map((item)=>{
                    return (
                        <div key={item.id}>
                            <h3 className='mb-5 text-xl font-medium inline-block p-3 bg-primary rounded-lg cursor-pointer'>{item.name}</h3>
                            <div key={item.id} className='aspect-video'>
                                <iframe
                                    width="864"
                                    height="486"
                                    src={`https://www.youtube.com/embed/${item.key}`}
                                    allowFullScreen
                                    frameBorder="0"
                                    title='youtobe'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture'
                                    className='w-full h-full object-fill  '
                                    >
                                </iframe>
                            </div>
                        </div>

                    )
                })
            }
            </div>

        </div>
    )
}
function MovieSimilar() {
    const {id}=useParams()
    const {data}=useSWR(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${Api_key1}`,
        fetcher
    )
    if (!data) return null
    return (
        <div className='py-10'>
            <h2 className='text-3xl font-medium mb-10'>Similar Movie</h2>
            <div className='movie-list'>
                <Swiper grabCursor={"true"} spaceBetween={30} slidesPerView={"auto"}>
                    {
                        data?.results.map((item)=>{
                            return (
                                <SwiperSlide key={item.id}>
                                    <MovieCard item={item}></MovieCard>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>

        </div>
    )
}



export default MovieDentail;