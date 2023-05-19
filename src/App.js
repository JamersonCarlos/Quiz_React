import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreateQuestion from './pages/CreateQuestion';
import Quiz from './pages/Quiz';
import Questions from './pages/Questions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1 className='title'>Quiz de Programação</h1>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
          <Route path='/quiz/:category' element={<Questions/>}></Route>
          <Route path='/create' element={<CreateQuestion/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
