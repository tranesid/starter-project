import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {register} = useContext(AuthContext)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(password.length <6){
      alert('passwords don not match')
      return // don't attempt registration
    }
    register({email, password})
  }
  return (
    <>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <br />
      <input
        required
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        minLength={6}
        required
        autoFocus
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <br />
       <label>Password Confirmation</label>
      <br />
      <input
        minLength={6}
        required
        autoFocus
        value={passwordConfirmation}
        onChange={(e)=> setPasswordConfirmation(e.target.value)}
      />
      <br />
      <button type='submit'>Register</button>
    </form>
    </>
  )
}

export default Register;