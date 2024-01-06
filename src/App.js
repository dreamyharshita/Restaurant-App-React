import React, { Fragment,useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {

  const [cartIsShown,setCartShown]=useState(false);
 

  const setCartHandler=()=>{
setCartShown(true);
  }

  const hideCartHandler=()=>{
    setCartShown(false);
  }

  return (
    <Fragment>
   {cartIsShown && <Cart onClose={hideCartHandler}/>}
   
   <Header onShowCart={setCartHandler}/>
   <main>
    <Meals></Meals>
   </main>
    </Fragment>
  );
}

export default App;
