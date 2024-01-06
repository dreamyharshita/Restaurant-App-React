import React, { Fragment } from "react";
import mealsImage from '../../assests/meals.jpg'
import './Header.css';
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
return (<Fragment>
<header className="header">
    <h1>ReactMeals</h1>
    <HeaderCartButton onClick={props.onShowCart} />
</header>
<div className="mainImage">
<img alt="MEALS" src={mealsImage}/>
</div>
</Fragment>);
}

export default Header;