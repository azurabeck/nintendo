import React from 'react';
import { Routes, Route } from "react-router-dom";

// TEMPLATES
import PublicPage from './templates/publicPage'

// ORGANISM
import Navbar from './organism/navbar'

function App() {
  return (
      <div className='app'>
        <Navbar />        
        <Routes>
            <Route path='/' element={<PublicPage/>} />
        </Routes>
      </div>
  );
}

export default App;