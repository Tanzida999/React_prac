const MyFavoriteFood = () => {
    let foodItems3 = ['Vagetables', 'Fruits',' Biriyani', 'Kacchi'];
    return (
        <>
        <ul className="list-group">
            {foodItems3.map(item =>
            <li className="list-group-item">
                {item}
            </li>)}
        </ul>
        </>
    );
}
export default MyFavoriteFood;