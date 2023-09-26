import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../Contexts/AuthProvider';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
       token ? <Outlet {...rest} /> : navigate('/login')
  );
};

export default ProtectedRoute;