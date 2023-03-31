import { useState } from "react"
import Todos from "./components/todos"
import data from "./datatodo"

function App() {

  const [todo,setTodo] = useState()
  const [allTodos,setAllTodos] = useState(data)


  const handleInput = (e) => {
    setTodo(e.target.value)
  }

  const addTodo = () => {
    setAllTodos([...allTodos,
      {
        todoName:todo,
        isComplete:false
      }])
  }


  return (
    <div className="flex flex-col item-center justify-center text-center" >
      <h1 className="text-5xl m-10 text-indigo-400" >To Do List</h1>
      <div className="flex flex-row justify-center items-center m-5">

        <input
        onChange={handleInput}
        
        className="mr-5 border-2 h-10 border-indigo-800 rounded-lg bg-transparent text-center placeholder:text-center" placeholder="add a todo"></input>
        
        <button 
        onClick={() => {addTodo();console.log(todo)}}
        className=" bg-indigo-900 border-slate-700 text-white w-16 h-10 rounded-lg border-2 ml-5" >Add</button>
      
      </div>
      <div className="border-2 border-indigo-400 rounded-lg m-5"> 
      {allTodos.map(item => <Todos item={item} />)}
       </div>
    </div>
  )
}

export default App
