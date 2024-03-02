// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import LoginPage from '../src/pages/LoginPage';
// import SignUpPage from '../src/pages/SignUpPage';
// import SettingsPage from '../src/pages/SettingsPage';
// import ProfilePage from '../src/pages/ProfilePage';

// import SlidingTabs from "./pages/components/SlidingTabs";
// import NewsArticleComponent from "./pages/components/NewsArticleContainer";
// import Nav from "./pages/components/Nav";
import './App.css';

import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
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
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './pages/components/ProtectedRoute';

function HomePage() {
  return (
    <div className="App">
    <Nav/>
    <SlidingTabs />
    <NewsArticleComponent/>
  </div>
  );
}

const App = () => {
  return (
    
     <Router>
      <Routes>
      {/* <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>}/> */}
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/settings" element={<SettingsPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/company/:name" element={<CompanyPage/>}/>
      </Routes>
     </Router>
      
  );
}

export default App;