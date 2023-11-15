import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Routes, Route} from 'react-router-dom';
import Home from './Home'
function App() {
  return (
   <>
   <Navbar />

   <Routes>
   <Route path='/' element={<Home />}></Route>
  </Routes>

   <Footer />
   </>
  );
}

export default App;
