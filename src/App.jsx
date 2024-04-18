import { React } from 'react'
import { Routes, Route } from 'react-router-dom';
import CardList from './pages/CardList';
import CardDetails from './pages/CardDetails'
import Home from './pages/Home';

function App() {
  return (
    <>
    <Home/>
    <div>
      Test
    </div>
    </>
    
  //   <Routes>
  //     <Route path="/" element={<CardList/>} />
  //     <Route path="/card/:id" element={<CardDetails/>} />
  // </Routes>
  )
}

export default App
