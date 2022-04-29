import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/admin"
                    >
                        Admin
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/student"
                    >
                        Student
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/teacher"
                    >
                        Teacher
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}