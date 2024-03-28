const AmmuFavFood = () => {
    let foodItem4 = ['Bhat','Bhorta', 'Khuder bhat', 'Chora'];
    return ( <>
        <ul className="list-group">{foodItem4.map(item =>
  <li className="list-group-item">{item}</li>)}
  </ul>
        </>
    );
}

export default AmmuFavFood;