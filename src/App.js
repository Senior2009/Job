import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/home/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Navbar/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
