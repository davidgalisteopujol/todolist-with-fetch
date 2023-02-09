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


	const añadirTarea = () =>{
        enviarTarea()
		setTarea([...tarea, { label: inputCreado, done: false }])
        setInputCreado("")
	}


    const borrarTarea= (index) => { 
        const borradoArray= [...tarea]
        borradoArray.splice(index,1)
        setTarea(borradoArray)
            if(borradoArray.length===0) {
                borradoArray.splice(0,borradoArray.length)
                console.log("no quea nada ")
                setTarea([{label:"...",done:false}]) 
                console.log("esto es el contenido: "+ tarea)
            }else{
                setTarea(borradoArray)
            } 
    }


    const enviarTarea =() => {

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify([
			...tarea,
			{ label: inputCreado, done: false }
		]);

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/david",
			requestOptions
		)
			.then(response => response.json())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}



    return (
        
        <div>
            <input className="container" name="label" style={{width:"290px"}} type="text" value={inputCreado} onChange={(e)=>setInputCreado((e.target.value))}  /><button onClick={añadirTarea} >Enviar</button>
                {
				tarea.map((tarea,index) => <Lista borrarTarea={borrarTarea} tarea={tarea.label} key={index} index = {index}/> )
				} 
        </div>
    )
}

export default Formulario;