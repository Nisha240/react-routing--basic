
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
 const navigate= useNavigate();
  return (
    <div>
      <h1>this is home page😁😁😍</h1>
    <button onClick={()=>navigate('/order-summary')}>pick order</button>
     
    </div>
  )
}

export default Home
//<button onClick={()=> navigate('order-summary')}>Place order</button>