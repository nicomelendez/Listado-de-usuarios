import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Empleado } from './Empleado'

export const Gestion = () => {

  const [nombreGestor,setNombreGestor] = useState("");
  const [pagina,setPagina] = useState(1);
  const gestorInput = useRef();
  
  useEffect(()=>{
      console.log("Vista de Gestion");
  },[nombreGestor, pagina]);
  
  const asignarGestor = e =>{
      setNombreGestor(gestorInput.current.value);
    }
    
  const mostrarMensaje = useCallback(() =>{
    console.log("Mensaje desde componente empleado");     
  },[pagina]);
  return (
    <div>
        <h1>Nombre del gestor: {nombreGestor}</h1>
        <input type="text" ref={gestorInput} onChange={asignarGestor} placeholder="Introduce tu nombre"/>
        <h2>Listado de empleado</h2>
        <p>Los usuarios son gestionado por {nombreGestor} vienen de jsonplaceholder...</p>
        <button onClick={()=>{setPagina(1)}}>Pagina 1</button>
        <button onClick={()=>{setPagina(2)}}>Pagina 2</button>
        <Empleado mensaje={mostrarMensaje} page={pagina}/>
    </div>
  )
}
