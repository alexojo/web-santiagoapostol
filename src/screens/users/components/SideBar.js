import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../../reducers/auth/authContext'

export const SideBar = () => {

    const {user} = useContext(AuthContext)

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

                    <a> {user.name}</a>
                </div>
            </div>
        </nav>
    )
}