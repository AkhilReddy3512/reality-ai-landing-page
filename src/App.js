import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import './App.css'

const App = () => {

  return (
    <div>
        <Router>
          <Routes>
            <Route index element={<LandingPage />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App

