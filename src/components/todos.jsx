function Todos({ item, allTodos, deleteTodo, handleMark }) 
{
  
  const searchIndex = () => {
    const index = allTodos.findIndex(prop => prop.todoName === item.todoName)
    return index
  };

  return (
    <div className="flex flex-row justify-around w-[30%] items-center text-center border-2 border-indigo-400 rounded-lg m-5 bg-secondColor dark:bg-gray-600 dark:border-gray-300">
      <div
        onClick={() => {
          handleMark(searchIndex());
        }}
        className={
          item.isCompleted
            ? " w-[50%] text-2xl p-2 line-through select-none decoration-4 dark:text-white"
            : " w-[50%] text-2xl p-2 font-semibold select-none dark:text-white"
        }
      >
        {item.todoName}
      </div>
      <button
        className="w-[10%] h-8 rounded-lg bg-indigo-900 hover:bg-indigo-700 text-white dark:bg-red-900 dark:hover:bg-red-700 "
        onClick={() => {
          deleteTodo(searchIndex());
        }}
      >
        X
      </button>
    </div>
  );
}

export default Todos;
