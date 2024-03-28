const FoodItems2 =() => {
  let foodItems2 = ['Burger', 'Pizza',' Fries', 'Chocolates'];
  
    return (<>
    <ul className="list-group">
  {foodItems2.map(item=>
    <li className="list-group-item">{item}</li>)}
</ul>
</>
);
}


export default FoodItems2;