import React from "react";
import './MealItemForm.css';


const MealItemForm=()=>{
return(
    <form className="form">
        <label>Amount</label>
        <input type="number"></input>
        <br/>
        <br/>
        <button>Add Amount</button>
    </form>
)
}

export default MealItemForm;