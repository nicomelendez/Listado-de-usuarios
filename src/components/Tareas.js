import React, { useMemo, useState } from 'react'

export const Tareas = () => {

  const [tareas,setTareas] = useState([]);

  const [contador,setContador] = useState(1000);
  
  const guardarTareas = e =>{
    e.preventDefault();

    let tareas_actualizadas = [...tareas, e.target.descripcion.value]

    setTareas(tareas_actualizadas);
    e.target.descripcion.value = "";

  }
  const borrarTarea = id =>{
    //Filtrar las tareas para borrar la que no quiero
    let nuevas_tareas = tareas.filter((tarea,indice) =>indice !== id);
    //Set state
    setTareas(nuevas_tareas);
  }
   
  const sumarAlContador = e =>{
    setContador(contador + 1);
  }  
  const contadoresPasado = (acumulacion) =>{
    for(let i = 0; i<=acumulacion; i++){
      console.log("Ejecutando acumulacion de contadores del pasado...")
    }
    return `Contador de manual de tareas: ${acumulacion}`;
  }
  const memoContadores = useMemo(()=>contadoresPasado(contador), [contador]);

  return (
    <div>
        <h1>Mis tareas</h1>
        <form onSubmit={guardarTareas}>
            <input type="text" name="descripcion" placeholder='Describe la tarea'/>
            <input type="submit" value="Guardar"/>
        </form>

        <h3>{memoContadores}</h3>
        <button onClick={sumarAlContador}>Sumar</button>

        <h2>Listas de tareas</h2>
        <div className='tareas'>
          <ul>
          {tareas.map((tarea,indice)=>{
            return(

              <li key={indice}>{tarea} &nbsp; <button onClick={()=>borrarTarea(indice)}>X</button></li>

            )
          })}
          </ul>
        </div>
    </div>
  )
}
