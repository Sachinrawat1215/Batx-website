import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home/:id' element={<Home />} />
    </Routes>
  );
};

export default App;