//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//components
import NavBar from './components/NavBar';
import UseRef from './components/UseRef';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/useref' element={<UseRef/>} />

      </Routes>
      
      </BrowserRouter>
       
    </div>
  );
}

export default App;
