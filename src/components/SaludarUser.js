import React from "react";

export default function SaludarUser(props){
    
    return(
        <div>
            <p>Hola {props.userInfo.nombre}, tienes {props.userInfo.anyos} años y tu color favorito es el {props.userInfo.colorFav} </p>
        </div>
    );
}