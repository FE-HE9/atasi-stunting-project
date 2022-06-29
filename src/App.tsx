import React, { Fragment } from 'react';
import RouterSetup from './routes/routes';
import Header from './components/molecules/Header/Header';
import Footer from './components/molecules/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <RouterSetup/> 
      <Footer/>
    </>
  );
}

export default App;
