import React from "react";

export default function Boton(props){
   const funcionSaludar = () =>{
    alert("Hola " + props.nombreUser);
   }

    return(
        <div>
            <button onClick={funcionSaludar}>Botón Saludar</button>
        </div>
    );
}