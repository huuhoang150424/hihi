export const fetcher= async (...args)=>{
    try {
        const res=await fetch(...args)
        const data=await res.json()
        return data
    }
    catch(e) {
        console.log(`Lỗi ${e}`)
        throw e
    }
}