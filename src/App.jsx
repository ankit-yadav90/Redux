import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, incremente, IncriseBuyAmount} from './assets/redux/features/counterSlice';

const App = () => {
  const [num, setnum] = useState(7);

  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.value)
  return (
    <div>
      <h1>{count}</h1>

      <input
      value={num}
       type="number" onChange={(e)=>{
        setnum(e.target.value)
        
      }}/>
      <button onClick={()=>{
        dispatch(incremente())
      }}>Incriment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decriment</button>
      <button onClick={()=>{
        dispatch(IncriseBuyAmount(Number(num)))
      }}>Incrise Buy Amount</button>
    </div>
  )
}

export default App;
