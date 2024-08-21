import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/logo-gobierno.jpg';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-center">

            <div className="navbar-collapse d-flex justify-content-center">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/projects"
                    >
                        Projects
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/users"
                    >
                        Users
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </div>
            </div>

        </nav>
    )
}