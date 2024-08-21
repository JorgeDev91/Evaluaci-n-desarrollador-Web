import React from 'react'

export const ProjectCard = (data) => {
    console.log(data);
    return (
        <>
            <div className="card w-10 text-bg-light mb-3" >
                <div className="card-body">
                    <h5 className="card-title ">{data.Nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">inicio: {data.fecha_inicio}, finalizado: {data.fecha_fin}</h6>
                    <p className="card-text">Descripción: {data.descripcion}</p>
                    <p className="card-text">Objetivos: {data.objetivos}</p>
                    <p className="card-text">Monto de ejecución: {data.monto_ejecucion}</p>
                    <button className="card-link btn btn-dark">Ver a detalle</button>
                    <button className="card-link btn btn-dark">Administrar</button>
                </div>
            </div>
        </>
    )
}
