import React from 'react';

import {Navbar} from '../../ui/components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ProjectPage } from '../pages/ProjectPage';
import { UsersPage } from '../pages/usersPage';
import { LoginPage } from '../../auth/pages/loginPage';


export const AdminViewRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/users" element={< UsersPage />} />
                <Route path="/*" element={< LoginPage />} />
            </Routes>
        </>
    )
}
