
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from './pagess/login';
import About from './About';
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LoginForm/>} />
    <Route path='/about' element={<About></About>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;