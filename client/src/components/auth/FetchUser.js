import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"


const FetchUser = (props)=>{
    const [loaded, setLoaded] = useState(false)
    const {user, setUser} = useContext(AuthContext)
    useEffect(()=>{
        checkUser()
    },[])

    const checkUser = async()=>{
      if(user || !localStorage.getItem('access-token')){
          setLoaded(true)
      } else {
          try {
            let res = await axios.get('/api/auth/validate_token')
            setUser(res.data.data)
            setLoaded(true)
          } catch (error) {
            setLoaded(true)
          }
      }
    }

    return loaded ? props.children : null
}

export default FetchUser