import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Share/Header/Header';
import AddData from './Pages/Home/AddData/AddData';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addRacords' element={<AddData></AddData>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
