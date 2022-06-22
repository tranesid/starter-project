import axios from "axios"
import { useEffect, useState } from "react"

export const useAxiosOnMount = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        getData()
    },[])

    const getData = async ()=>{
        try{
          let res = await axios.get(url)
           // I am making an assumption that the data is
           // coming back as res.data, that is not always the case   
          setData(res.data)
        }catch(err){
          // error handling can be hard to make generic, espically if you are working
          // with different api's
          setError({message: err.message, response:err.response})
        } finally{
          setLoading(false)
        }
    }

    return {data, loading, error}
}