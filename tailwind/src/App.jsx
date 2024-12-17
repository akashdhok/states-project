import { useState } from "react"

function App() {
  const[counter , setCounter] = useState(5)
  const [color , setColor] = useState("olive")
  function red()
  {
    setColor("red")
  }
  function lavender()
  {
    setColor("lavender")
  }
  function olive()
  {
    setColor("olive")
  }
  function add()
  {
    setCounter(counter+1)
  }
  function remove(){
    setCounter(counter-1)
  }
  return (
    <>
  <div className="w-full h-screen duration-300" style={{backgroundColor:color}}>
    <h1>Count : {counter}</h1>
    <button onClick={add}>Add</button>
    <button onClick={remove}>Remove</button>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3 py-2">
        <button className=" outline-none px-4 rounded-md" style={{backgroundColor : "red"}} onClick={red} >Red</button>
        <button className=" outline-none px-4 rounded-md" style={{backgroundColor : "lavender"}} onClick={lavender}>Lavender</button>
        <button className=" outline-none px-4 rounded-md" style={{backgroundColor : "olive"}} onClick={olive} >Olive</button>

      </div>
    </div>
  </div>
    </>
  )
}

export default App
