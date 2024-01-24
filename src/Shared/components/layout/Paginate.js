import { useState ,memo} from "react";
import { Link ,useLocation, useSearchParams} from "react-router-dom";
import { Api_key1 } from "../../Constant/app";
const Paginate = ({pages}) => {
    const {data,filterDebouncen,handleChildData}=pages
    const {page}=data
    const [movPages,setMovPages]=useState(page)
    //console.log(pages)
    const SumPages=40
    console.log("render 1")
    const renderPages=(dental=2)=>{
        const ListPages=[]
        const left=movPages-dental
        const right=movPages+dental
        for(let i=1;i<=SumPages;i++) {
            if (i===1 || i===movPages || i===SumPages || (left <= i && i <= right) ) {
                ListPages.push(i)
            } else if ( i===left-1 || i===right+1) {
                ListPages.push('...')
            }
        }
        return ListPages
    }
    const handleNextPage=(movePage)=>{
        setMovPages(movePage)
    }

    return (
        <div className="flex item-center justify-center py-10 gap-[15px] font-medium">
            <span onClick={()=>{
                if (movPages<=1) {
                    handleChildData(SumPages)
                    return handleNextPage(SumPages)
                }
                handleChildData(movPages-1)
                return handleNextPage(movPages-1)
                }} 
                className="btn click-btn"
                // to={``}
            >
                <i className="fa-solid fa-chevron-left"></i>
            </span>
            {
                renderPages().map((item,index)=>{
                    if (item==='...') {
                        return (
                            <span className="btn" key={index}>{item}</span>
                        )
                    }
                    else 
                    {
                        return (
                            <Link 
                                // to={formatURL(item)}
                                onClick={()=>{
                                    handleChildData(item)
                                    return handleNextPage(item)
                                    
                                }}
                                className={`btn ${item===page?'active':""}`} 
                                key={index}
                            >{item}
                            </Link>
                        )
                    }
                })
            }
            <span onClick={()=>{
                if (movPages>=SumPages) {
                        handleChildData(1)
                        return handleNextPage(1)
                    }
                handleChildData(movPages+1)
                return handleNextPage(movPages+1)
                }} 
                className="btn click-btn"
                // to={``}
            >
                <i className="fa-solid fa-chevron-right"></i>
            </span>
        </div>
    );
};

export default memo(Paginate);