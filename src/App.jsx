import './App.css';
import Signin from './Database/signin';
import Signup from './Database/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/footer';
import HotelCard from './pages/HotelCard';
import HotelListingPage from './pages/HotelListingPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/HotelCard' element={<HotelCard/>} />
      <Route path='/HotelListingPage' element={<HotelListingPage/>} />


        
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
