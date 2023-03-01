import { useState } from "react";

const TodoForm = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? (
        <form className="w-full max-w-md bg-gray-600 p-3 m-2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <input
            type="text"
            placeholder="Write a todo here..."
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none"
          />
          <input
            type="button"
            value="Add todo"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-2 cursor-pointer"
          />
        </form>
      ) : (
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-4 cursor-pointer"
          onClick={handleClick}
        >
          Add ToDo
        </button>
      )}
    </div>
  );
};

export default TodoForm;
