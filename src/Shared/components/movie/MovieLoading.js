import Loading from "../Loangding/Loading";
const MovieLoading = () => {
    return (
        <div className="page-container-fluid flex gap-[35px]"> 
            {
                Array(4).fill(0).map((index)=>{
                    return (
                        <div key={index} className="flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none cursor-wait">
                            <Loading className="w-[216px] h-[250px] mb-2"></Loading>
                            <div className="flex flex-col flex-1">
                                <Loading className="w-[216px] h-[28px] mb-2"></Loading>
                                <Loading className="w-[216px] h-[28px] mb-6"></Loading>
                                <Loading className="w-[216px] h-[48px]"></Loading>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
};
export default MovieLoading;