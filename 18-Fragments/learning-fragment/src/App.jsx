import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems2 from "./components/FoodItems2";
import ErrorMessage from "./components/ErrorMessage";
import MyFavoriteFood from "./components/MyFavoriteFood";
import AmmuFavFood from "./components/AmmuFavFood";
import MunaApuFavFood from "./components/MunaApuFavFood";
import HealthyFood from "./components/HealthyFood";
function App() {

 
  
  return (
  
      <>
        <h1>Healthy Food</h1>
        <HealthyFood></HealthyFood>
        
  
<h1>UnHealthy Food</h1>
<ErrorMessage></ErrorMessage>
<FoodItems2></FoodItems2>
<h1>My Favorite Food</h1>
<MyFavoriteFood></MyFavoriteFood>
<h1>Ammur Favorite Food</h1>
<AmmuFavFood></AmmuFavFood>
<h1>Muna Apur Favourite Food</h1>
<MunaApuFavFood></MunaApuFavFood>



</>
  );
}

export default App
