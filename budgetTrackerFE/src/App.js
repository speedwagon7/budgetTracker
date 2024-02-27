import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './Styles/Table.css';
import './App.css';
import NotFoundPage from './Components/PageNotFound';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/LandingPage/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
