import Header from './components/Header';
import './App.css';
import NoteListPage from './pages/NoteListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotePage from './pages/NotePage';
import { useState} from 'react';


function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <Router>
      <div className={`container ${theme}`}>
        <div className='app'>
        <Header theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<NoteListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
