import React from "react";
import './AvailaibleMeals.css';
import MealsDisplay from "./MealItem/MealsDisplay";
import Card from "../UI/Card";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
     
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
const AvailaibleMeals=()=>{
    
   

  return(<section className="meals"> 
    <ul>
      <Card>
       <MealsDisplay dummyData={DUMMY_MEALS} key={DUMMY_MEALS.id}/>
       </Card>
    </ul>
  </section>)
}

export default AvailaibleMeals;