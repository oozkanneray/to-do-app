function Todos(props) {
  return (
    <div className="flex flex-row justify-around w-[35%] items-center text-center border-2 border-indigo-400 rounded-lg m-5 bg-secondColor dark:bg-gray-600 dark:border-gray-300">
      <div
      
        onClick={() => {
          props.handleMark(props.allTodos.findIndex(item => item.todoName == props.item.todoName));
        }}
        className={
          props.item.isCompleted
            ? " w-[50%] text-2xl p-2 line-through select-none decoration-4 dark:text-white"
            : " w-[50%] text-2xl p-2 font-semibold select-none dark:text-white"
        }
      >
        {props.item.todoName}
      </div>
      <button
      className="w-[50%] dark:text-white"
      onClick={()=>{props.deleteTodo(props.allTodos.findIndex(item => item.todoName == props.item.todoName))}}
      >X</button>
    </div>
  );
}

export default Todos;
