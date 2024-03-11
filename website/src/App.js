import React from "react";
import {Route, Routes } from 'react-router-dom';
import Layout from './pages/components/Layout';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import { CompaniesProvider } from './api/CompaniesContext';

const App = () => {
  return (
    <CompaniesProvider>
     <AuthProvider>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/company/:companyId" element={<CompanyPage/>}/>
          </Route>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/settings" element={<SettingsPage/>} />
      </Routes>
     </AuthProvider>
     </CompaniesProvider>
  );
}

export default App;