function Header({changeTheme}) {
  return (
    <header>
      <button
        onClick={changeTheme}
        className="absolute  text-2xl font-bold top-10 right-16 dark:text-white"
      >
        Change Theme
      </button>
      <h1 className="text-6xl m-10 text-indigo-400 dark:text-gray-300">
        To Do List
      </h1>
    </header>
  );
}

export default Header;
