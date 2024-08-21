import { Route, Routes } from "react-router-dom";
import {LoginPage} from '../auth/pages/LoginPage';
import { AdminViewRoutes } from '../adminView/routes/AdminViewRoutes';
import { SignInPage } from "../auth/pages/SignInPage";


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="signIn" element={<SignInPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/*" element={< AdminViewRoutes />} />
            </Routes>
        </>
    )
}
