import './App.scss';
import { Slider } from './components/slider/Slider';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Gallery } from './components/gallery/Gallery';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="nav-container">
          <nav>
            <ul>
              <li>
                <Link to="/">Slider</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
