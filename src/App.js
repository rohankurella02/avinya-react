import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Chat from './Pages/Chat';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello</h1>} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
