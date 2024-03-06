import React, {useState, useEffect}from "react";
import './App.css';

import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import Nav from './pages/components/Nav';
import SlidingTabs from './pages/components/SlidingTabs';
import NewsArticleComponent from './pages/components/NewsArticleContainer';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import { CompaniesProvider } from './api/CompaniesContext';
import ProtectedRoute from './pages/components/ProtectedRoute';




const App = () => {

  return (
    <CompaniesProvider>
     <AuthProvider>
      <Routes>
      {/* <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>}/> */}
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/settings" element={<SettingsPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/company/:companyId" element={<CompanyPage/>}/>
      </Routes>
     </AuthProvider>
     </CompaniesProvider>
      
  );
}

export default App;