
import useSWR from "swr";
import Button from "../button/Button";
import {fetcher} from "../../../config"
import { Api_key1 } from "../../Constant/app";
import {SwiperSlide,Swiper} from "swiper/react";
import "swiper/scss"
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const {data,error}=useSWR(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key1}`,fetcher)

    const movie=data?.results || []
    return (
        //grabCursor={"true"} con trỏ chuột khi kéo side
        //slidesPerView={"auto"} tính toán số lượng phần tử
        <section className="banner h-[450px] page-container-fluid mb-20 overflow-hidden select-none">
            <Swiper  grabCursor={"true"} slidesPerView={"auto"}>
                {movie.length>0 && movie.map((item)=>{
                    return (
                        <SwiperSlide key={item.id}>
                            <BannerItem item={item}></BannerItem>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};
const BannerItem=({item})=>{
    const {title,poster_path,id}=item
    const navigate=useNavigate()
    return (
        <div className="w-full h-full rounded-lg bg-white relative">
            <div className="inset-0 absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg "></div>
            <img 
                src={`http://image.tmdb.org/t/p/original/${poster_path}`}
                alt=""
                className="w-full h-full object-cover rounded-lg object-top"
            />
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl mb-5">{title}</h2>
                <div className="flex items-center  gap-x-3 mb-8">
                    <span className="py-2 px-4 border border-white rounded-md">Avengers</span>
                    <span className="py-2 px-4 border border-white rounded-md">Avengers</span>
                    <span className="py-2 px-4 border border-white rounded-md">Avengers</span>
                </div>
                <Button 
                    onClick={()=>{return navigate(`/movies/movie-${id}`)}}
                    className="w-auto"
                >
                    Watch now
                </Button>
            </div>

        </div>
    )
}

export default Banner;