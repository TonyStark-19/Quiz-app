// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/home';
import CategoryPage from './pages/category';
import QuizPage from './pages/quizpage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/category" element={<CategoryPage />} />
        <Route path="/quiz/:category" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}