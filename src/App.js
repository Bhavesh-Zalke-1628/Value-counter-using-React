import matchers from '@testing-library/jest-dom/matchers';
import './App.css';
import { useState } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';
function App() {
  let [counter, setCounter] = useState(0);
  const addvalue =()=>{
    counter=counter+1
    setCounter(counter)
  }
  let removeValue=() => {
    var remove = setCounter(counter-1)
  }
  return (
    <div className='container'>
    <h1>Value Counter</h1>
    <h2>Counter Value {counter}</h2> 
      <button onClick={addvalue}>Add value :- {counter+1}</button>
      <button 
      onClick={removeValue}
      >Remove Value :- {counter}</button>
    </div>
  );
}

export default App;
