import React, { useEffect } from 'react'
import axios from "axios";

import { UserCard } from '../components/UserCard';

const baseURL = "http://localhost:8080/usuarios";

export const UsersPage = () => {

    const [usuarios, setUsuarios] = React.useState([]);

    useEffect(() => {

        const getUsuarios = async () => {
            try {
                const res = await axios.get(baseURL);
                setUsuarios(res.data);
            } catch (error) {
                console.log(err)
            }
        }

        getUsuarios(); 
        
    }, []);

        console.log(usuarios);
    return (
        <>
            <div className="container mt-3 ">
            {
                usuarios.map( (usuario,index) => (
                    <UserCard  key={index} {...usuario} />
                ))
            }
            </div>           
        
        </>
    )
}
