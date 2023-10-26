import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('')

  const bgColorChange=(color)=>{
    
    setBgColor(color)
    console.log(bgColor)
  }

  return (
    <>
      <div className='w-100' style={{height:'100vh'}}>
        <div className='d-flex mt-5 container' style={{ height: '450px', alignItems:'center',justifyContent:'center',backgroundColor:bgColor }}>
        
        </div>
        <div className='d-flex mt-5' style={{ alignItems: 'center', justifyContent: 'center' }}>
          <button className='btn btn-primary m-2' onClick={()=>bgColorChange('blue')}> Blue</button>
          <button className='btn btn-success m-2' onClick={()=>bgColorChange('green')}>Green</button>
          <button className='btn btn-dark m-2' onClick={()=>bgColorChange('black')}> Black</button>
          <button className='btn btn-warning m-2' onClick={()=>bgColorChange('yellow')}>Yellow</button>
        </div>
      </div>
    </>
  );
}

export default App;
