import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Projects from './pages/Projects';
import Main from './pages/Main.js';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
