import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";

const Login = () => {
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e)=>{
    e.preventDefault()
    login({email, password})
  }
  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <br/>
      <input
      required
      autoFocus
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      <label>Password</label>
      <br/>
      <input 
      required
      autoFocus
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      />
      <br/>
      <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login;