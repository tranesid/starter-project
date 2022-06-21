import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
      <div>
      <h1>Home: do not logged in to see this page</h1>
      {user ? <p>Hello {user.email}</p> : <p> not logged in</p>}
      </div>
  )
}



export default Home;