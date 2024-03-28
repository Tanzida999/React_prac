const ErrorMessage = () =>{
    let foodItems2 = ['Burger', 'Pizza',' Fries', 'Chocolates'];
    return <>
    {
  foodItems2.length ===0 && <h3>I am Still hungry</h3>
}
    
    </>
}
export default ErrorMessage;