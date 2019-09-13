
import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const [todo, setTodo] = useState({desc: '', date:''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
    setTodo({desc: '', date:''});
    
  }

  const deleteItem = (event) => {
    console.log(event.target.value);
    setTodos(todos.filter((item, index)=> parseInt(event.target.id) !==index));

  }

  const inputChanged= (event)=> {
    setTodo({...todo, [event.target.name]:event.target.value});
  }

  return (
    <div>
      
      <form onSubmit={addTodo}>
        Description
        <input type="text" onChange={inputChanged} value={todo.desc} name="desc"/>
        <br></br><br></br>
        Date
        <input type="date" onChange={inputChanged} value={todo.date} name="date"/>
        <br></br><br></br>
        <input type="submit" value="Add"/>
        <br></br><br></br>
      </form> 
      
      <TodoTable todos={todos} deleteItem={deleteItem} />

    </div>
  );
}
export default App;
