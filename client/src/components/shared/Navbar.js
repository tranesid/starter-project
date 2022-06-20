import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import '../../App.css'; 

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const renderNavItems = () => {
    if (user) {
      return (
        <>
        <Link to='/account'>
          Account
        </Link>
        <Link to='/'><li onClick={logout}>Logout</li></Link>
        </>
      );
    } else {
      return (
        <>
        <Link to="/register">
          Register
        </Link>
        <Link to='/login'>
          Login
        </Link>
        </>
      );
    }
  };
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            Home
          </Link>
          {renderNavItems()}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;