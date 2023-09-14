import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect, Link
} from "react-router-dom";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Clients from './components/Clients'
import Services from './components/Services'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
