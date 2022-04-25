import React from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { SideBar } from '../screens/users/components/SideBar';

import { AdminScreen } from '../screens/users/screens/admin/AdminScreen';
import { StudentScreen } from '../screens/users/screens/student/StudentScreen';
import { TeacherScreen } from '../screens/users/screens/teacher/TeacherScreen';


export const UsersRouter = () => {
    return (

        <>
            <SideBar />

            <Routes>

                <Route path="admin" element={<AdminScreen />} />
                <Route path="student" element={<StudentScreen />} />
                <Route path="teacher" element={<TeacherScreen />} /> 

            </Routes>
        
        </>

    )
}

