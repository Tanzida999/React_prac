import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Todo1 from "./components/Todo1";
import Todo2 from "./components/Todo2";
import "./App.css";
function App() {




  return (
      <center className="todo-container">

      <AppName/>
      <AddTodo/>
      <div className="items-container">
      <Todo1></Todo1>
      <Todo2></Todo2>
      </div> 
      
      </center>
  )
}

export default App;
