import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
  <>
  <h3>Page Not Found (react route not found)</h3>
  <Link to ='/'>Home</Link>
  </>
  )
}

export default NoMatch;