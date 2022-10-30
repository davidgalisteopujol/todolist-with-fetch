import React from "react";
import {borrarTarea} from "./Formulario.jsx"
 
const Lista =(props) => {

    return (

        <div className="list-group container" style={{width:"290px"}}>
            <a href="#" className="list-group-item list-group-item-action" key={props.index}>{props.tarea}<button className="boton" onClick={()=>props.borrarTarea(props.index)}>X</button></a>
        </div>  
    )
}

export default Lista;