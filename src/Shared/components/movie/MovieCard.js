import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import MovieLoading from "./MovieLoading";


const MovieCard = ({item}) => {
    const {title,vote_average,release_date,poster_path,id}=item
    const naviagte=useNavigate()
    return (
        <div className="flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none cursor-pointer">
            <img 
                src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <div className="flex flex-col flex-1">
                <h3 className="text-xl  font-bold mb-3">{title}</h3>
                <div className="flex items-center justify-between text-sm opacity-50 mb-5"> 
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>
                <Button onClick={()=>{ naviagte(`/movies/movie-${id}`) }} >Watch Now</Button>
            </div>
        </div>
    );
};
export default MovieCard;