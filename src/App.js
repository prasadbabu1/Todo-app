 import  {useState} from 'react';
//  import './index.css'
 
 const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");


  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }])
      setNewTodo("");
    };
  }
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)

  };
  const handleToggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos)
  }

  return (
    <div className='container'>
      <h2>To-Do List </h2>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
 placeholder="Enter a task..." />
 

<button style={{backgroundColor:"black",color:"white",borderRadius:"5px",padding:"5px"}} onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: "flex" }}>
            <div style={{ display: "flex",justifyContent:"center", alignItems: "center" }}>


              <input type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span
                style={{ marginRight: "10px", textDecoration: todo.checked ? "Line-through" : "none", }}>{todo.text}</span>
              <button style={{ marginTop: "5px", marginBottom: "5px",backgroundColor:"black",color:"white",borderRadius:"5px",padding:"5px"}} type="submit" onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}
 
 export default App;
