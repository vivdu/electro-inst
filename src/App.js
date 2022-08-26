import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/electro-inst/" element={<Index/>}></Route>
        <Route path="/inicio" element={<Index/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
