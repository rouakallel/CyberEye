import Search from './components/Search'
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from './components/About';
import ShowReport from './components/ShowReport'
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Login from './components/Login';
function App() {
 
  return (
    <>
   <Router>
      <Navbar />
      <Routes>

          <Route path='/' element={<Search/>}/>
          <Route path='/virustotal/:domain' element={<ShowReport/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
         
      </Routes>
      <Footer />
    </Router> 
    </>
  );
}

export default App;
