import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Results from './Results';
import Rate from "./Rate.jsx";



function App() {
  return (
      <BrowserRouter>

          <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');

        * {
          font-family: 'Roboto Slab', sans-serif;
          box-sizing: border-box;
        }
        body {
          background-color: #28205c;
          color: #ffffff;
          margin: 0;
          padding: 20px;
        }
        .screen-container {
          max-width: 1000px;
          margin: 50px auto;
          text-align: center;
          background: #1c1c1c;
          padding: 40px;
          border-radius: 10px;
        }
        .search-form {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }
        .search-input {
          padding: 10px;
          font-size: 16px;
          width: 70%;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: #111111;
        }
        .simple-button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #0056b3;
          color: white;
          border: none;
          cursor: pointer;
                    border-radius: 10px;
        }
        .simple-button:hover {
          background-color: #004494;
        }
        a {
        color: #66b3ff;
        }
        h1   {color: white;}

        p {color: white;}
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