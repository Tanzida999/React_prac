import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {

  const todoItems = [
    {
    name: 'Buy Milk',
    dueDate: '04/03/2024'
  },
    {
    name: 'Go to University',
    dueDate: '05/03/2024'
  },
    {
    name: 'Buy Eid Dress',
    dueDate: '04/03/2024'
  },
    {
    name: 'Like this Course',
    dueDate: '05/03/2024'
  }
  

];
return (


      <center className="todo-container">

      <AppName/>
      <AddTodo/>
      <TodoItems todoItems={todoItems}></TodoItems>
      
      
      </center>
  )
}

export default App;
