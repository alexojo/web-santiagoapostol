import React from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { SideBar } from '../screens/users/components/SideBar/SideBar';

import { AdminScreen } from '../screens/users/screens/admin/AdminScreen';
import { SectionsScreen } from '../screens/users/screens/SectionsScreen';
import { StudentScreen } from '../screens/users/screens/student/StudentScreen';
import { StudentsScreen } from '../screens/users/screens/StudentsScreen';
import { TeacherScreen } from '../screens/users/screens/teacher/TeacherScreen';


export const UsersRouter = () => {
    return (

        <>
            <SideBar />
            <div>
                <Routes>

                    <Route path="admin" element={<AdminScreen />} />
                    <Route path="sections" element={<SectionsScreen />} />
                    <Route path="teacher" element={<TeacherScreen />} /> 
                    <Route path="students" element={<StudentsScreen />} /> 

                </Routes>

            </div>
        
        </>

    )
}

