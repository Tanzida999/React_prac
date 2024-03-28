function HeallthyFood (){
    let foodItems =['Fruits', 'green Vagetables', 'Egg', 'Milk', 'Beans'];
return (<>
    <ul class="list-group">
          {foodItems.map(item => 
          <li class="list-group-item">{item}</li> )}
  
 
</ul>
    
    </>);
}
export default HeallthyFood;