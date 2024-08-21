import React from 'react'

export const UserCard = (data) => {
    return (
        <>
            <div className="card w-10 text-bg-light mb-3" >
                <div className="card-body">
                    <h5 className="card-title ">{data.nombre}</h5>
                    <p className="card-text">Correo: {data.correo}</p>
                    <button className="card-link btn btn-dark">Ver proyectos asignados</button>
                    <button className="card-link btn btn-dark">Administrar</button>
                </div>
            </div>
        
        </>
    )
}
