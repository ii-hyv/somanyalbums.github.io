import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Results from './Results';
import Rate from "./Rate.jsx";
import 'water.css/out/dark.min.css';


function App() {
  return (
      <BrowserRouter>

          <style>{`
        /* 1. Change Water.css's built-in theme colors */
        :root {
          --background-body: #0e0f0f;

        }
body {
    font-family: 'Roboto Slab', sans-serif;
  }
 
        .screen-container {
          text-align: center;
          margin-top: 40px;
        }

        .search-form {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
      `}</style>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} />
              <Route path="/rate" element={<Rate />} />
          </Routes>
      </BrowserRouter>
  );
}
export default App