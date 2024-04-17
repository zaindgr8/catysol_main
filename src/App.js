import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import TokenAllocation from './pages/TokenAllocation/TokenAllocation';
import Roadmap from './pages/TokenAllocation/Roadmap';
import Faq from './pages/TokenAllocation/Faq';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/token-allocation' element={<TokenAllocation/>}/>
        <Route exact path='/roadmap' element={<Roadmap/>}/>
        <Route exact path='/faq' element={<Faq/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
