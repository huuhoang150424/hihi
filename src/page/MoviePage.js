import useSWR from "swr";
import MovieCard from "../Shared/components/movie/MovieCard";
import { fetcher } from "../config";
import { Api_key1 } from "../Shared/Constant/app";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Paginate from "../Shared/components/layout/Paginate";
import MovieLoading from "../Shared/components/movie/MovieLoading";


const type = 'popular';

const MoviePage = () => {
    const [hiddenLoading,setHiddenLoading]=useState(true)
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [submit, setSubmit] = useState("");
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/${type}?api_key=${Api_key1}`);
    const filterDebounce = useDebounce(submit, 500);

    useEffect(() => {
        // Lấy từ khóa tìm kiếm từ localStorage khi component được tạo
        const storedKeyword = localStorage.getItem('keyword');
        if (storedKeyword) {
            setFilter(storedKeyword);
            setSubmit(storedKeyword);
        }
        //clean khi component unmounted
        return ()=> localStorage.clear()
    }, []);
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleClick = () => {
        setSubmit(filter);
    };

    useEffect(() => {
        if (filterDebounce) {
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key1}&query=${filterDebounce}&page=${page}`);
        } else {
            setUrl(`https://api.themoviedb.org/3/movie/${type}?api_key=${Api_key1}&page=${page}`);
        }
    }, [filterDebounce, page]);

    useEffect(() => {
        setPage(1);
        localStorage.setItem('keyword', filterDebounce);
    }, [filterDebounce]);

    const handleChildData = (childData) => {
        setPage(childData);
    };

    const { data,isLoading } = useSWR(url, fetcher);

    //if (error) return <div>Lỗi</div>;
    if (isLoading) return null

    return (
        <div className="py-10 page-container-fluid ">
            <div className="flex mb-10">
                <input
                    type="text"
                    className="outline-none bg-slate-800 w-[100%] p-4 rounded-l-lg "
                    placeholder="Search"
                    onChange={handleFilterChange}
                    value={filter}
                />
                <div 
                    className="flex items-center justify-center bg-primary rounded-r-lg p-4 cursor-pointer font-medium"
                    onClick={handleClick}
                >Search</div>
            </div>
            {
                isLoading && (
                    <div className="rounded-full border-4 border-t-transparent border-primary w-10 h-10 mx-auto animate-spin"></div>
                )
            }
            <div className="grid grid-cols-4 gap-10">
                    {
                        !isLoading &&
                        data?.results?.length > 0 ? (
                            data.results.map((item) => (
                                <div key={item.id}><MovieCard item={item}></MovieCard></div>
                            ))
                        ) : (
                            <div>Không tìm thấy kết quả tìm kiếm</div>
                        )
                    }
                </div>

            <Paginate pages={{ data, filterDebounce, handleChildData }}></Paginate>
        </div>
    );
};

export default MoviePage;
