import React from "react";

import './MealsDisplay.css';


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
             <div></div>
        </li>
        
        
      )
        
    })}
    </div>
)
}
export default MealsDisplay;