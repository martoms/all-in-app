import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DataSearch from './features/dataSearch/DataSearch';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} caseSensitive />
          <Route path='/features/:route' element={<DataSearch />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
