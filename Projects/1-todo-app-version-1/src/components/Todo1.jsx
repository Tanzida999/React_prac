function Todo1(){
  let todoName = 'Buy Milk';
  let todoDate ='4/10/2024';

    return (
    <div className="container text-center">
    <div class="row">
      <div class="col-6">
        <p>{todoName}</p>
      </div>
      <div class="col-4">
      <p>{todoDate}</p>
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-danger">Delete</button>
  
  
      </div>
    </div>
    </div>);
}
export default Todo1;