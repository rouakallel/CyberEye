import Products from './components/Products';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from './components/About';
import ShowProduct from './components/ShowProduct';
import Contact from "./components/Contact";
function App() {
 
  return (
    <>
   <Router>
      <Navbar />
      <Routes>

          <Route path='/' element={<Products/>}/>
          <Route path='/product/:id/:slug' element={<ShowProduct/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
         
         
      </Routes>
    </Router> 
    </>
  );
}

export default App;
