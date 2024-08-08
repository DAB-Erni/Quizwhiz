import { useState, useEffect } from 'react';
import '../App.css';
import logo from '../assets/quizwhiz-logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userAction';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState('');

  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setRole(queryParams.get('role'));
  }, [location.search]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(username, password));
      setMessage(''); 
    } catch (error) {
      setMessage('Invalid username or password');
      console.error('Login failed:', error);
    }
  };

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    }
  }, [user, navigate]);

  return (
    <div className="cont w-full h-screen bg-slate-700 py-14 px-4 flex items-center">
      <div className="mx-auto w-full max-w-[343px] max-h-[540px] bg-primary opacity-70 rounded-2xl flex flex-col justify-center p-8 text-center gap-6 md:w-full  md:max-w-[400px] lg:max-w-[450px]">
        <form onSubmit={handleLogin}>
          <img className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]" src={logo} alt="quiz app logo" />
          <p className="text-xl py-8 uppercase tracking-[.25em] text-light">Login Page</p>
          <div className="flex flex-col text-left text-light font-medium gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border text-primary rounded focus:outline-none focus:ring focus:border-secondary-300 mb-2"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border text-primary rounded focus:outline-none focus:ring border-secondary-300 mb-8"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full btn-bg text-white py-3 rounded opacity-90 hover:bg-tertiary hover:opacity-100 focus:outline-none focus:ring focus:ring-accent"
          >
            Login
          </button>
          {message && <div className="error text-red-400 py-2">{message}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;