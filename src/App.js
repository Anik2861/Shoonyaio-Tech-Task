import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Banner from './Pages/Banner/Banner';
import Footer from './Pages/Footer/Footer';
import SessionReg from './Pages/SessionReg.js/SessionReg';

function App() {
  return (
    <div>
      <Banner></Banner>
      <SessionReg></SessionReg>
      <Footer></Footer>
    </div>
  );
}

export default App;
