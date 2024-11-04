import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import Service from './Pages/Service'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import '@fontsource/poppins'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Service />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
