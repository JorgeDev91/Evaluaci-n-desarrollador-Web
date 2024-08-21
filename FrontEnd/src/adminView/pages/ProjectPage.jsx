import React, { useEffect } from 'react';
import axios from "axios";

import { ProjectCard } from '../components/ProjectCard';

const baseURL = "http://localhost:8080/proyectos";
export const ProjectPage = () => {

    const [proyectos, setProyectos] = React.useState([]);

    useEffect(() => {

        const getProyectos = async () => {
            try {
                const res = await axios.get(baseURL);
                setProyectos(res.data);
            } catch (error) {
                console.log(err)
            }
        }

        getProyectos();
        
    }, []);

    return (
        <>
        <div className="container mt-3 ">
            {
                proyectos.map( (proyecto,index) => (
                    <ProjectCard  key={index} {...proyecto} />
                ))
            }
            

        </div>
        
        </>
    )
}
