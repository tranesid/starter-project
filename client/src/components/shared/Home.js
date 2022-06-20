import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>Home: You do not need to be logged in to view this page</h1>
      {user ? <p>Hello, {user.name}!</p> : <p>Not logged in</p>}
    </div>
  )
}

export default Home;