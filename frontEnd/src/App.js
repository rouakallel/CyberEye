import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./components/About";
import ShowReport from "./components/ShowReport";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Content from "./components/Content";
import SignUp from "./components/SignUp";
import ScanDomain from "./components/ScanDomain";
import ScanEmail from "./components/ScanEmail";
import ScanServiceExpo from "./components/ScanServiceExpo";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
               
            <Route path="virustotal">
              <Route path=":domain" element={<ShowReport />} />
            </Route>

            <Route path="contact">
              <Route index element={<Contact />} />
            </Route>

            <Route path="about">
              <Route index element={<About />} />
            </Route>

            <Route path="signup">
            <Route index element={<SignUp />} />
            </Route>

            <Route path="detectionUsurpation">
            <Route index element={<ScanDomain />} />
            </Route>

            <Route path="detectionFuiteDonnées">
            <Route index element={<ScanEmail />} />
            </Route>

            <Route path="detectionServicesExposés">
            <Route index element={<ScanServiceExpo />} />
            </Route>

            <Route path="login">
              <Route index element={<Login />} />
            </Route>
            {/* CATCH ALL */}
            <Route path="*" element={<Navigate to={"/"} replace />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
