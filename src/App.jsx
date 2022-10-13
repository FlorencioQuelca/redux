import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement ,setCounterGlobal, reset} from './store/slices/counter.slice'
import './App.css'
function App() {
  const counter =useSelector(state => state.counter)
     const dispatch =useDispatch()
   const handlePlus =() =>{
    dispatch(increment())
   }
   const handleMinus =()=>{
    dispatch(decrement())
   }
   const handleReset=()=>{
    dispatch(reset())
   }
   
    const  handleSet = () =>{
    dispatch(setCounterGlobal("golas"))
   }
  return (
    <div className="App">
       <h1>{counter}</h1>
       <button onClick={handleSet} >set value too 100</button>
       <button onClick={handlePlus} >+</button>
       <button onClick={handleMinus} >-</button>
       <button onClick={handleReset} >reset</button>
    </div>
  )
}

export default App
