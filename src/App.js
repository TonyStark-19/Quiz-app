// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/home';
import CategoryPage from './pages/category';
import QuizPage from './pages/quizpage';

// import scroll to top comonent
import ScrollToTop from './Components/ScrollToTop';

// main app

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/category" element={<CategoryPage />} />
        <Route path="/quiz/:category" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}