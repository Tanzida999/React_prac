const MunaApuFavFood = () => {
    
  let foodItem5 = ['Biriyani', 'Goru', 'Bhuna Khichuri'];
    return (<>
    <ul className="list-group">{foodItem5.map(item => 
<li className="list-group-item">{item}</li>)}</ul>
    
    </>);
}

export default MunaApuFavFood;