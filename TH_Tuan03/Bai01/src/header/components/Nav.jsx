import React from "react";
import chefify from '../../Data/chefify.png'
import Search from "./Search";
import '../../header/header.css'
import check from '../../Data/check.png'
import avatar from '../../Data/avatar.png'
const Nav =(props)=>{
    return(
        <div>
            <nav>
                <img src={chefify} alt="" />
                <input className="search" type="text" />
                <ul>
                    <li>What to cook </li>
                    <li>Recipes</li>
                    <li>Ingredients</li>
                    <li>Occasions</li>
                    <li>About Us</li>
                </ul>
                <button><img src={check} alt="" />Your Recipe box</button>
                <img src={avatar} alt="" />
            </nav>
            
        </div>
        
    )
}
export default Nav