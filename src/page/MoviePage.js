import useSWR from "swr";
import MovieCard from "../Shared/components/movie/MovieCard";
import { fetcher } from "../config";
import { Api_key1 } from "../Shared/Constant/app";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const type='popular'
const MoviePage = () => {
    const [filter,setFilter]=useState("")
    const [submit,setSubmit]=useState("")
    const [url,setUrl]=useState(`https://api.themoviedb.org/3/movie/${type}?api_key=${Api_key1}`)
    const filterDebouncen=useDebounce(submit,500);
    const handleFiuterChange=(e)=>{
        setFilter(e.target.value)
    }
    const handleClick=()=>{
        setSubmit(filter)
    }
    const {data,error}=useSWR(
        url,
        fetcher
    )
    useEffect(()=>{
        if (filterDebouncen) {
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key1}&query=${filterDebouncen}`)
        } else {
            setUrl(`https://api.themoviedb.org/3/movie/${type}?api_key=${Api_key1}`)
        }
    },[filterDebouncen])
    if (error) return (<div>Error</div>)
    if (!data) return (<div>Loading</div>) && null
    console.log(data)
    return (
        <div className="py-10 page-container-fluid ">
            <div className="flex mb-10">
                <input
                    type="text"
                    className="outline-none bg-slate-800 w-[100%] p-4 rounded-l-lg "
                    placeholder="Search"
                    onChange={handleFiuterChange}
                />
                <div 
                    className="flex items-center justify-center bg-primary rounded-r-lg p-4 cursor-pointer font-medium"
                    onClick={handleClick}
                >Search</div>
            </div>
            <div className="grid grid-cols-4 gap-10">
                {
                    data?.results?.length > 0 ? (
                        data.results.map((item) => (
                            <div key={item.id}><MovieCard item={item}></MovieCard></div>
                        ))
                    ) : (
                        <div>Không tìm thấy kết quả tìm kiếm</div>
                    )
                }
            </div>
        </div>
    );
};

export default MoviePage;