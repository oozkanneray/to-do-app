import { useState } from "react"
import Todos from "./components/todos"

function App() {

  const [todo,setTodo] = useState("")
  const [allTodos,setAllTodos] = useState([])
  const [theme,setTheme] = useState("light")


  const handleInput = (e) => {
    setTodo(e.target.value)
  }

  const addTodo = () => {
    if(todo != "" ){
      setAllTodos([...allTodos,
        {
          todoName:todo,
          isCompleted:false
        }])
        console.log(allTodos)
    }
    setTodo("")
  }

  const deleteTodo = (index) => {
    allTodos.splice(index,1)
    setAllTodos([...allTodos])
  };

  const handleMark = (index) => {

    allTodos[index].isCompleted = !allTodos[index].isCompleted;
    setAllTodos([...allTodos])
  }



  return (
    <div className="flex flex-col item-center justify-center text-center">
      <button onClick={() => {setTheme(theme == "light" ? "dark" : "light")}} className="absolute top-5 right-10"> Change Theme: {theme} </button>
      <h1 className="text-5xl m-10 text-indigo-400" >To Do List</h1>
      <div className="flex flex-row justify-center items-center m-5">
        <input
        onChange={handleInput}
        value={todo}
        className="mr-5 border-2 w-100 h-10 border-indigo-800 rounded-lg bg-transparent text-center placeholder:text-center"
        placeholder="Add a Todo"></input>
        <button 
        onClick={addTodo}
        className=" bg-indigo-900 border-slate-700 text-white w-16 h-10 rounded-lg border-2 ml-5" >Add</button>
      </div>
      <div className="flex flex-col justify-center items-center">
        {allTodos.map(item => <Todos key={item.id} deleteTodo={deleteTodo} allTodos={allTodos} handleMark={handleMark} setAllTodos={setAllTodos} item={item}/>)}
      </div>
    </div>
  )
}

export default App
