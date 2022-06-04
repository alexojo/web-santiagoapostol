import React from 'react'
import { Routes, Route } from "react-router-dom";
import { SideBar } from '../screens/users/components/SideBar/SideBar';

import { AdminScreen } from '../screens/users/screens/admin/AdminScreen';
import { SectionScreen } from '../screens/users/screens/admin/sections/SectionScreen';
import { SectionsScreen } from '../screens/users/screens/admin/sections/SectionsScreen';
import { StudentScreen } from '../screens/users/screens/admin/students/StudentScreen';
import { StudentsScreen } from '../screens/users/screens/admin/students/StudentsScreen';
import { TeachersScreen } from '../screens/users/screens/admin/teachers/TeachersScreen';
import { UsersScreen } from '../screens/users/screens/admin/users/UsersScreen';


export const UsersRouter = () => {
    return (

        <>
            <SideBar />
            <div>
                <Routes>

                    <Route path="admin" element={<AdminScreen />} />
                    <Route path="sections" element={<SectionsScreen />} />
                    <Route path="section" element={<SectionScreen />} />
                    <Route path="teachers" element={<TeachersScreen />} /> 
                    <Route path="students" element={<StudentsScreen />} /> 
                    <Route path="users" element={<UsersScreen />} />                  
                    <Route path="student" element={<StudentScreen />} /> 
                    <Route path="users" element={<UsersScreen />} />                     
                </Routes>

            </div>
        
        </>

    )
}

