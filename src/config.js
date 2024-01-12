export const fetcher=(...args)=>{
    return fetch(...args)
                .then((res)=>{
                    return res.json()
                })
}