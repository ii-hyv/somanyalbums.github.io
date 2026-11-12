import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';


function App() {
  return (
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 text-gray-900 p-4 font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/search" element={<Results />} />

          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App