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
import SlidingTabs from "./pages/components/SlidingTabs";
import NewsArticleComponent from "./pages/components/NewsArticleContainer";
import Nav from "./pages/components/Nav";


const HomePage = () => {
  return (
    <div className="App">
    <Nav/>
    <SlidingTabs />
    <NewsArticleComponent />
  </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      </Routes>
     
    </Router>
    
  );
}

export default App;




// const App = () => {
//   return (
//     <div className='main'>
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<HomePage/>}/>
//         <Route path="/login" element={<LoginPage/>}/>
//         <Route path="/signup" element={<SignUpPage/>}/>
//         <Route path="/settings" element={<SettingsPage/>}/>
//         <Route path="/profile" element={<ProfilePage/>}/>
//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default App;