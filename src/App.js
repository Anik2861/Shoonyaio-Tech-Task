import { Link, Route, Routes } from 'react-router-dom';
import Events from './Pages/Events/Events';
import Login from './Pages/Form/Login/Login';
import SignUP from './Pages/Form/SignUp/SignUP';
import Home from './Pages/Home/Home';
import './App.css';
import { BiHome } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FaUserFriends, FaEnvelope } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import Audience from './Pages/Audience/Audience';
import NewsLetter from './Pages/NewsLetter/NewsLetter';
import EventDetails from './Pages/EventDetails/EventDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Settings from './Pages/Settings/Settings';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { signOut } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Post from './Pages/Post/Post';
import PostDetails from './Pages/Post/PostDetails';
import EventInput from './Pages/EventDetails/EventInput';


function App() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <div className='mainContainer'>

      <div className=' dashboard'>
        <Link to='/'>
          <h4 className='home'>< BiHome /><span className='ms-3'>Home</span></h4>
        </Link>
        <Link to='/event'>
          <h4 className='event'><IoVideocamOutline /><span className='ms-3'>Event</span></h4>
        </Link>
        <Link to='/audience'>
          <h4 className='audiance'><FaUserFriends /><span className='ms-3'> Audience</span> </h4>
        </Link>
        <Link to='/newsLetter'>
          <h4 className='newsLetter'><FaEnvelope /><span className='ms-3'>News Letter</span></h4>
        </Link>
        <Link to='/settings'>
          <h4 className='settings'><FiSettings /><span className='ms-3'>Settings</span></h4>
        </Link>
        {/* <Link to='/post'>
          <h4 className='settings'><span className='ms-3'>Post</span></h4>
        </Link> */}
        <Link to='/login' class="LoginMain">
          <img className='loginImg' src={user?.photoURL} alt="" />
          <h6 className='loginField'><span className='ms-3'>{user?.displayName}</span></h6>
        </Link>
        {
          user ? <p onClick={handleSignOut}>Sign Out</p> : ""
        }
      </div>

      <div>
        <Routes>
          <Route path='/' element={<RequireAuth>
            <Home></Home>
          </RequireAuth>}></Route>
          <Route path='/event' element={<RequireAuth>
            <Events></Events>
          </RequireAuth>}></Route>

          <Route path='/eventDetails' element={<EventDetails></EventDetails>}>
            <Route path=':eventId' element={<EventInput></EventInput>}></Route>
          </Route>

          <Route path='/audience' element={<RequireAuth>
            <Audience></Audience>
          </RequireAuth>}></Route>
          <Route path='/newsLetter' element={<RequireAuth>
            <NewsLetter></NewsLetter>
          </RequireAuth>}></Route>
          <Route path='/settings' element={<RequireAuth>
            <Settings></Settings>
          </RequireAuth>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUP></SignUP>}></Route>

          <Route path='/post' element={<Post></Post>}>
            <Route path=':postId' element={<PostDetails></PostDetails>}></Route>
          </Route>

        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
