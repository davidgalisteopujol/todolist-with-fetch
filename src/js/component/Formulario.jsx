import React, { useEffect } from "react";
import { useState } from "react";
import Lista from "./Lista.jsx";
import { getList } from "../../functions/getList.js";


const Formulario = () => {

    const [inputCreado, setInputCreado] = useState("");
	const [tarea, setTarea] = useState([]);


    useEffect(() => {
        getList().then(body => setTarea(body))
    },[])

    
    useEffect(()=>{
   
        fetch('https://assets.breatheco.de/apis/fake/todos/user/david', {
            method: "PUT",
            body: JSON.stringify(tarea),
            headers: {
            "Content-Type": "application/json"
            }
        })
        .then(resp => {
            return resp.json(); 
        })
        .then(body => {
            console.log(body);
        })
        .catch(error => {
            console.log(error);
        });

    },[tarea])
    

	const añadirTarea = (e) => {setInputCreado({[e.target.name]: e.target.value, done:false});}

	const crearArray = (e) =>{
		if(e.key === 'Enter') {
            
			setTarea([...tarea, inputCreado])
            setInputCreado("")
		}
	}

	// const borrarTarea= (index) => {  asi estaba el original
	// 	const borradoArray= [...tarea]
	// 	borradoArray.splice(index,1)
	// 	setTarea(borradoArray)
	// }


    const borrarTarea= (index) => { 
        const borradoArray= [...tarea]
        borradoArray.splice(index,1)

            if(borradoArray.length===0) {
                borradoArray.splice(0,borradoArray.length)
                console.log("no quea nada ")
                setTarea([{label:"...",done:false}]) 
                console.log("esto es el contenido: "+ tarea)
        
            }else{
                setTarea(borradoArray)
            } 
    }


    

    return (
        
        <div>

            <input className="container" name="label" style={{width:"290px"}} type="text" onChange={añadirTarea}  onKeyPress={crearArray} />

            <div>
                {
				tarea.map((tarea,index) => <Lista borrarTarea={borrarTarea} tarea={tarea.label} key={index}/> )
				}
            </div>

        </div>

    )
}

export default Formulario;