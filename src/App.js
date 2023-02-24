/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalculatorUi from './pages/CalculatorUi';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<CalculatorUi />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
