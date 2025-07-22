import Home from './pages/Home'
import Quiz from './pages/Quiz'
import BuildDisplay from './pages/BuildDisplay'
import { useEffect, useState } from "react";
import ScrollToTop from './components/ScrollToTop';
import Layout from "./Layout"
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import {auth} from "../firebase.js"
export default function App() {

  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Quiz" element={<Quiz/>}/>
            <Route path="/BuildDisplay" element={<BuildDisplay/>}/>
          </Route>
        </Routes>
      </Router>      
  );
}