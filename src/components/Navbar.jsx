import '../App.css'
import logo from '../assets/quizwhiz-logo.svg'
import logoutIcon from '../assets/logout.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userAction';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/home');
  };

  return (
    <>
    <div className="w-full h-fit bg-primary z-30 fixed top-0">
        <div className="mx-auto max-w-[1024px] px-2 py-2 sm:px-4 md:px-5 lg:px-8  flex justify-between items-center ">
          <Link to="/">
            <img className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[200px]" src={logo} alt="quiz app logo" />
          </Link>

            <div>

              <button className="w-32 btn-bg flex justify-center gap-2 items-center text-md text-white py-3 rounded hover:bg-tertiary focus:outline-none focus:ring focus:ring-blue-300" onClick={handleLogout}>
              <img src={logoutIcon} alt="quiz app logo" />
                  <span>Logout</span>
              </button>

            </div>
        </div>
    </div>

    </> 
  )
}

export default Navbar
