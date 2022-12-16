import { useEffect, useState } from "react";
import './App.css'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Footer from "./Components/Footer";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experience" element={<Experience/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
