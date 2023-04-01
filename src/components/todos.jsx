function Todos(props) {
  return (
    <div className="flex flex-row justify-around w-[85%] items-center text-center w-96 border-2 border-indigo-400 rounded-lg m-5 bg-secondColor">
      <div
      
        onClick={() => {
          props.handleMark(props.allTodos.findIndex(item => item.todoName == props.item.todoName));
        }}
        className={
          props.item.isCompleted
            ? " w-[50%] text-2xl p-2 line-through select-none decoration-4"
            : " w-[50%] text-2xl p-2 font-semibold select-none "
        }
      >
        {props.item.todoName}
      </div>
      <button
      className="w-[50%]"
      onClick={()=>{props.deleteTodo(props.allTodos.findIndex(item => item.todoName == props.item.todoName))}}
      >X</button>
    </div>
  );
}

export default Todos;
