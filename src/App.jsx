import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Results from './Results';
import Rate from "./Rate.jsx";
import MyRatings from './MyRatings.jsx';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import 'water.css/out/dark.min.css';


function App() {
  return (
      <HashRouter>

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
        .rating-form {
          margin: 25px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }
        .rating-select {
        width: 80px;
          padding: 10px 15px;
          font-size: 16px;
          background-color: #222426;
          color: #ffffff;
          border: 1px solid #555;
          border-radius: 1px;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>

          <TopBar />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} />
              <Route path="/rate" element={<Rate />} />
              <Route path="/my-ratings" element={<MyRatings />} />
          </Routes>
          <Footer />
      </HashRouter>

  );
}
export default App