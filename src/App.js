// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/home';
import CategoryPage from './pages/category'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}