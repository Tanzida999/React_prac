import Todo from "./Todo";
const TodoItems = ({todoItems}) => {
    return (
      
         <div className="items-container">
            {todoItems.map((item) =>  (<Todo todoDate={item.dueDate} todoName={item.name}></Todo>))}
    

      </div>  
        
    );
}
export default TodoItems;