import { useState } from "react"
import './App.css'
function App() {
  let [counter,setCounter] = useState(0)
  // let counter = 11
  const addValue =  () => {
    if(counter < 20){
      counter = counter+1
      setCounter(counter)
    }
    else{
      alert("Limit Reached")
    }
  } 
  const removeValue =  () => {
    if(counter>0){
      counter = counter-1
      setCounter(counter)
    }
    else{
      alert("Do Not Descrese")
    }
  }   
  return (
    <>
      <h1>Value Counter</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value {counter} </button>
    </>
  );
}

export default App;
