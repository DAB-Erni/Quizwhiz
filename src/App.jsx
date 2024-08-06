import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Admin from './components/Admin';
import User from './components/Users';
import Examiner from './components/Examiner';
import Examinee from './components/Examinee';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />

        {/* Private routes */}
        <Route element={<PrivateRoute roles={['admin']} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/examiner" element={<Examiner />} />
        </Route>
        <Route element={<PrivateRoute roles={['user']} />}>
          <Route path="/user" element={<User />} />
          <Route path="/examinee" element={<Examinee />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;