import React,{useState} from 'react'

function HookEx() {
    const[count,setCount]= useState(0)
  return (
    <div>
        <{count}<br></br>
        <button onClick={()=>{setCount(count+1)}}>ClickMe</button><br/>
        <button onClick={()=>{setCount(count-1)}}>ClickMe</button><br/>
        <button onClick={()=>{setCount(count+5)}}>ClickMe</button>
    </div>
  )
}

export default HookEx