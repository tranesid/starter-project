import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserAccount from './components/shared/UserAccount';

const App = () => (
  <>
    <Navbar />
    <hr />
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route  element={<ProtectedRoute/>}>
            <Route path="/account" element={<UserAccount />} />
        </Route>
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
  </>
)

export default App;