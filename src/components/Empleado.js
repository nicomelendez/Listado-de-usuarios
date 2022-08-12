import React, { useEffect, useState } from 'react'

export const Empleado = React.memo(
    ({page, mensaje}) => {

        const [empleados,setEmpleados] = useState([]);

        useEffect(()=>{
         console.log("Vista de empleado");
        }, [empleados]);
        
        useEffect(()=>{
            conseguirEmpleados(page);
        },[page]);
        mensaje();

        const conseguirEmpleados = async(page) => {
            const url = "https://reqres.in/api/users?page="+page;
            const peticion = await fetch(url);
            const {data: empleados} = await peticion.json();

            setEmpleados(empleados);
        }

        return (
            <div>
                <p>Mostrando la pagina: {page}</p>
                <ul className='empleados'>
                {empleados.length >= 1 && empleados.map(empleado=>{
                    return(<li key={empleado.id}>{empleado.first_name+" "+ empleado.last_name}</li>)
                })}
                </ul>
            </div>
        )
    });
