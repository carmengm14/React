import React from "react";

export default function Saludar(props){
    
    return(
        <div>
            <h2>Hola {props.name}, tiene {props.years} años </h2>
        </div>
    );
}