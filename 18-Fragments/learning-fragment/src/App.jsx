import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let foodItems = [];
  
  let foodItems =['Fruits', 'green Vagetables', 'Egg', 'Milk', 'Beans'];
  let emptyMessage = foodItems.length ===0 ? 
  <h3>I am Still Hungry</h3> :null ;
  let foodItems2 = ['Burger', 'Pizza',' Fries', 'Chocolates'];
  let foodItems3 = ['Burger', 'Vagetabbles', 'Fruits','Milk'];
  let foodItem4 = ['Bhat','Bhorta', 'Khuder bhat', 'Chora'];
  let foodItem5 = ['Biriyani', 'Goru', 'Bhuna Khichuri'];
  
  return (
  
      <>
        <h1>Healthy Food</h1>
        {emptyMessage}
        <ul class="list-group">
          {foodItems.map(item => 
          <li class="list-group-item">{item}</li> )}
  
 
</ul>
  
<h1>UnHealthy Food</h1>
<ul className="list-group">
  {foodItems2.map(item=>
    <li className="list-group-item">{item}</li>)}
</ul>
<h1>My Favorite Food</h1>
<ul className="list-group">{
  foodItems3.map(item =>
  <li className="list-group-item">{item}

  </li>)
}

</ul>

<h1>Ammur Favorite Food</h1>
<ul className="list-group">{foodItem4.map(item =>
  <li className="list-group-item">{item}</li>)}

</ul>
<h1>Muna Apur Favourite Food</h1>
<ul className="list-group">{foodItem5.map(item => 
<li className="list-group-item">{item}</li>)}</ul>


</>
  )
}

export default App
