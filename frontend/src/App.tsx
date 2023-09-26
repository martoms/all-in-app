import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DataSearch from './features/dataSearch/DataSearch';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} caseSensitive />
          <Route path='/features/:route' element={<DataSearch />} />
          <Route path='*' element={ <PageNotFound/> } />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
