// import React, { useState } from 'react'

// function Tasks() {
  
//   const [ showModal, setShowModal ] = useState(false);
//   const [ todos, setTodos ] = useState([]);
//   const [ currentTodo, setCurrentTodo ] = useState({
//     title: '',
//     description: ''
//   });

//   const handleChange = event => {
//     event.preventDefault();
//     setTodos([...todos, currentTodo]);
//     setCurrentTodo({
//       title: '',
//       description: ''
//     })
//   };

//   const handleSubmit = event => {
//     setCurrentTodo({
//       ...currentTodo,
//       [event.target.name] : [event.target.value]
//     })
//   }

//   return (
//     <div>
       
//        <form onSubmit={handleSubmit}>
//          <input
//            type="text"
//            name="title"
//            placeholder="Todo title"
//            value={currentTodo.title}
//            onChange={handleChange}
//          />
//          <input
//            type="text"
//            name="description"
//            placeholder="Todo description"
//            value={currentTodo.description}
//            onChange={handleChange}
//          />
//          <button type="submit">Add Todo</button>
//        </form>
//        <ul>
//          {todos.map((todo, index) => (
//            <li key={index}>{todo.title} - {todo.description}</li>
//          ))}
//        </ul>

//       <div className='mt-10 flex justify-between'>
//         <h2>Board</h2>
//         <h4>This week</h4>
//       </div>

//       <div className='mt-5 flex justify-between space-x-2'>
//         <div className='w-[300px] bg-slate-100 p-2 rounded-lg'>
//           To do
//         </div>
//         <div className='w-[300px] bg-slate-100 p-2 rounded-lg'>
//           In progress
//         </div>
//         <div className='w-[300px] bg-slate-100 p-2 rounded-lg'>
//           Done
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Tasks

import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({
    title: '',
    description: '',
    category: ''
  });
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleSubmit = event => {
    event.preventDefault();
    setTodos([...todos, currentTodo]);
    setCurrentTodo({
      title: '',
      description: '',
      category: ''
    });
  }

  const handleChange = event => {
    setCurrentTodo({
      ...currentTodo,
      [event.target.name]: event.target.value
    });
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

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
          name='category' 
          placeholder='category'
          value={currentTodo.category}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.title} - {todo.description}</li>
        ))}
      </ul> */}

      <div className='mt-10 flex justify-between'>
         <h2 className='text-xl'>Board</h2>
         <h4>This week</h4>
      </div>

      <div className='mt-5 flex justify-between space-x-2'>
        <div className='flex flex-col w-[300px] h-[600px] bg-slate-100 p-5 rounded-lg'>
          <h2 className='mb-5 font-bold text-lg'>To Do</h2>
          {todos.map((todo, index) => (
                <div key={index} className="flex bg-white p-4 mb-4 rounded-lg">
                  <div className='flex flex-col'>  
                    <h6 className='text-[9px]'>{todo.category}</h6>
                    <h1 className='font-semibold text-lg'>{todo.title}</h1>
                    <p className='text-xs'>{todo.description}</p>
                  </div>

                  <div>
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                      {showMenu && (
                        <ul>
                          <li>edit</li>
                          <li>
                            <svg onClick={() => deleteTodo(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />                              
                            </svg>
                          </li>
                        </ul>
                      )}
                  </div>
                </div>
          ))}
        </div>
        
        <div className='w-[300px] bg-slate-100 p-5 rounded-lg'>
          <h2 className='mb-5 font-bold text-lg'>In Progress</h2>
        </div>
        <div className='w-[300px] bg-slate-100 p-5 rounded-lg'>
          <h2 className='mb-5 font-bold text-lg'>Completed</h2>
        </div>
      </div>
    </div>
  );
}

export default TodoList

