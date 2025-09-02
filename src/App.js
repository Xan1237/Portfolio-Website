import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.scss';

function App() {
  return (
    <Routes>
      {/* Routes with Layout */}
        <Route path="/" element={<Home />} />

      {/* Routes without Layout */}
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
