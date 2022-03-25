import React , { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { getToken } from './_store/actions/nintendoActions'

// TEMPLATES
import PublicPage from './templates/publicPage'

// ORGANISM
import Navbar from './organism/navbar'

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToken());
  }, [dispatch])

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