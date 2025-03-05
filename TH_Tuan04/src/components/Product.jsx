import React from "react";
function Product({id,name,image}){
    return(
    <div>
        <span>{id}</span>
        <p>{name}</p>
        <img src={image} alt="" />
    </div>
    )
    
}
export default Product