
import './App.css';
import  Header  from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import ModalDel from './modal/ModalDelivery/ModalDel';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main  />
      <Footer />
      <ModalDel />
    </div>
  );
}

export default App;
