import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';



function App() {
  return (
      <BrowserRouter>
        {/*<div className="min-h-screen bg-gray-50 text-gray-900 p-4 font-sans">*/}
        {/*  <Routes>*/}
        {/*    <Route path="/" element={<Home />} />*/}
            <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          color: #333;
          margin: 0;
          padding: 20px;
        }
        .screen-container {
          max-width: 600px;
          margin: 50px auto;
          text-align: center;
          background: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
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
        }
        .simple-button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #0056b3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .simple-button:hover {
          background-color: #004494;
        }
        h1   {color: black;}
      `}</style>

          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      // </BrowserRouter>
  );
}
export default App