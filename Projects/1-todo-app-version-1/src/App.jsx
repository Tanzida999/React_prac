import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Todo1 from "./components/Todo1";
import Todo2 from "./components/Todo2";
function App() {




  return (
      <center className="todo-container">

      <AppName/>
      <AddTodo/>
      <Todo1></Todo1>
      <Todo2></Todo2>
      
      </center>
  )
}

export default App;
