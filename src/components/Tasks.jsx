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
    description: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    setTodos([...todos, currentTodo]);
    setCurrentTodo({
      title: '',
      description: ''
    });
  }

  const handleChange = event => {
    setCurrentTodo({
      ...currentTodo,
      [event.target.name]: event.target.value
    });
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
        />
        <input
          type="text"
          name="description"
          placeholder="Todo description"
          value={currentTodo.description}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.title} - {todo.description}</li>
        ))}
      </ul>

      <div className='mt-10 flex justify-between'>
         <h2>Board</h2>
         <h4>This week</h4>
       </div>

       <div className='mt-5 flex justify-between space-x-2'>
         <div className='w-[300px] bg-slate-100 p-2 rounded-lg'>
           To do
         </div>
         <div className='w-[300px] bg-slate-100 p-2 rounded-lg'>
           In progress
         </div>
         <div className='w-[300px] bg-slate-100 p-2 rounded-lg'>
           Done
         </div>
       </div>
    </div>
  );
}

export default TodoList

