function Form({handleInput,addTodo,todo}) {
  return (
    <form
      onSubmit={addTodo}
      className="flex flex-row justify-center items-center m-8"
    >
      <input
        onChange={handleInput}
        value={todo}
        className="mr-5 border-2 w-100 h-12 border-indigo-800 rounded-lg bg-transparent text-center placeholder:text-center dark:text-white dark:border-gray-300"
        placeholder="Add a Todo"
      ></input>
      <button className="bg-indigo-900 text-white w-16 h-12 rounded-lg border-2 ml-5 hover:bg-indigo-700 dark:bg-gray-600 dark:border-gray-300">
        Add
      </button>
    </form>
  );
}

export default Form;
