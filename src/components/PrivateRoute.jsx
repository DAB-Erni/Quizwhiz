import { Navigate, Outlet } from 'react-router-dom';
import authService from '../services/auth.service';

const PrivateRoute = ({ roles }) => {
  const currentUser = authService.getCurrentUser();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (roles && roles.length > 0 && !roles.includes(currentUser.role)) {
    if (currentUser.role === 'admin') {
      return <Navigate to="/admin" />;
    } 
    
    if (currentUser.role === 'user') {
      return <Navigate to="/user" />;
    } 
  }

  return <Outlet />;
};

export default PrivateRoute;