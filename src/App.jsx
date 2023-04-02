import {useEffect, useState } from "react"
import Todos from "./components/todos"

function App() {

  const [todo,setTodo] = useState("")
  const [allTodos,setAllTodos] = useState(
    !localStorage.getItem("todo-list")
    ? []
    :JSON.parse(localStorage.getItem("todo-list"))
    )


  const [theme,setTheme] = useState(
    !localStorage.getItem("dark-mode")
    ? "dark"
    :JSON.parse(localStorage.getItem("dark-mode") )

  )


  useEffect(() => {
    localStorage.setItem("todo-list",JSON.stringify(allTodos))
    localStorage.setItem("dark-mode",JSON.stringify(theme))
  }, [allTodos,theme])



  const changeTheme = () => {

    setTheme(theme == "light" ? "dark" : "light")
    if(theme == "light") {
      document.body.classList.add("dark")
    }
    else {document.body.classList.remove("dark")
    }
  }

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
    <div className="flex flex-col item-center text-center h-[100%] dark:bg-black">
      <button onClick={changeTheme} className="absolute  text-2xl font-bold top-10 right-16 dark:text-white">Change Theme</button>
      <h1 className="text-6xl m-10 text-indigo-400 dark:text-gray-300" >To Do List</h1>
      <div className="flex flex-row justify-center items-center m-8">
        <input
        onChange={handleInput}
        value={todo}
        className="mr-5 border-2 w-100 h-12 border-indigo-800 rounded-lg bg-transparent text-center placeholder:text-center dark:text-white dark:border-gray-300"
        placeholder="Add a Todo"
        onKeyDown={(e) => {
          if(e.key == "Enter") addTodo()
        }}
        ></input>
        <button 
        onClick={addTodo}
        className="bg-indigo-900 text-white w-16 h-12 rounded-lg border-2 ml-5 hover:bg-indigo-700 dark:bg-gray-600 dark:border-gray-300" >Add</button>
      </div>
      <div className="flex flex-col justify-center items-center">
        {allTodos.map(item => <Todos key={item.id} deleteTodo={deleteTodo} allTodos={allTodos} handleMark={handleMark} item={item}/>)}
      </div>
    </div>
  )
}

export default App
