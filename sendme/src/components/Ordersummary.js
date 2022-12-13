import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';

function Ordersummary() {
const navigate = useNavigate()

  return (
    <div>
   Order confirmed! ✅
    
   
 
      <button onClick={navigate(-1)}>GO Backk</button>
  
    </div>
  )
}

export default Ordersummary
