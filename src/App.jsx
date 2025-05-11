import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollBar from './Components/ScrollBar';
import Home from './Pages/HomePage';
import Loader from "./Components/Loader";
import "./assets/styles/common.css";

function App() {
  return (
    <>
      <Loader/>
      <Router>
        <Navbar />
        <ScrollBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
