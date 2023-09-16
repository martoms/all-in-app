import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} caseSensitive />
        </Routes>
    </Router>
  )
}

export default App
