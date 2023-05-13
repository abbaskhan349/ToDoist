import { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, currentTodo]);
    setCurrentTodo({
      title: "",
      description: "",
      category: "",
    });
  };

  const handleChange = (event) => {
    setCurrentTodo({
      ...currentTodo,
      [event.target.name]: event.target.value,
    });
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Todo title"
          value={currentTodo.title}
          onChange={handleChange}
          className="mt-5"
        />
        <input
          type="text"
          name="description"
          placeholder="Todo description"
          value={currentTodo.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="category"
          value={currentTodo.category}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>

      <div className="mt-10 flex justify-between">
        <h2 className="text-xl">Board</h2>
        <h4>This week</h4>
      </div>

      <div className="mt-5 flex justify-between space-x-2">
        <div className="flex flex-col w-[300px] h-[600px] bg-slate-100 p-5 rounded-lg">
          <h2 className="mb-5 font-bold text-lg">To Do</h2>
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex bg-white p-4 mb-4 rounded-lg"
            >
              <div key={index} className="flex flex-col">
                <h6 className="text-[9px]">{todo.category}</h6>
                <h1 className="font-semibold text-lg">{todo.title}</h1>
                <p className="text-xs">{todo.description}</p>
              </div>

             
            </div>
          ))}
        </div>

        <div className="w-[300px] bg-slate-100 p-5 rounded-lg">
          <h2 className="mb-5 font-bold text-lg">In Progress</h2>
        </div>
        <div className="w-[300px] bg-slate-100 p-5 rounded-lg">
          <h2 className="mb-5 font-bold text-lg">Completed</h2>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
