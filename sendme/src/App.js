/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';

// eslint-disable-next-line no-unused-vars
import {Routes,Route}  from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Ordersummary from './components/Ordersummary';
function App() {
 
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/order-summary' element={<Ordersummary/>}/>
     </Routes>
   
    </div>
    
  );
}


export default App;
