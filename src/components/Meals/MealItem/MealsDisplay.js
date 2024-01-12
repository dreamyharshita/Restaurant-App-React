import React from "react";
import MealItemForm from './MealItemForm.js';
import './MealsDisplay.css';
import Card from "../../UI/Card.js";


const MealsDisplay=(props)=>{
    console.log(props.dummyData);
return(
   <div> 
    
    {props.dummyData.map((data,index)=>{
      return (
        <li key={index} className="meal">
            <div>
            <h3> {data.name} </h3>
            <div className="description">  {data.description}</div>
             <div className="price"> {data.price} </div>
            
             </div>
             <div>
              <Card>
              <MealItemForm id={data.id} item={data}/>
             
              </Card>
             </div>
        </li>
        
        
      )
        
    })}
    </div>
)
}
export default MealsDisplay;