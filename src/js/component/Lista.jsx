import React from "react";
 
const Lista =(props) => {

    return (

        <ul className="list-group container" >
            <li className="list-group-item list-group-item-action" key={props.index}>{props.tarea}<button className="boton" onClick={(e)=>props.borrarTarea(props.index)}>X</button></li>
        </ul>  
    )
}

export default Lista;