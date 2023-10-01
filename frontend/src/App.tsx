import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DataSearch from './features/dataSearch/DataSearch';
import PageNotFound from './pages/PageNotFound';
import LaunchItemPage from './features/dataSearch/LaunchItemPage';

function App() {
  return (
    <Router basename='/'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} caseSensitive />
          <Route path='/features/:route' element={<DataSearch />} />
          <Route path='/features/:route/:id' element={<LaunchItemPage />} />
          <Route path='*' element={ <PageNotFound/> } />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
