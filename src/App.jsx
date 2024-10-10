import './App.css';
import Header from './Database/Header';
import Signin from './Database/signin';
import Signup from './Database/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
