import React from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { SideBar } from '../screens/users/components/SideBar/SideBar';

import { AdminScreen } from '../screens/users/screens/admin/AdminScreen';
import { SectionScreen } from '../screens/users/screens/SectionScreen';
import { StudentScreen } from '../screens/users/screens/student/StudentScreen';
import { TeacherScreen } from '../screens/users/screens/teacher/TeacherScreen';


export const UsersRouter = () => {
    return (

        <>
            <SideBar />
            <div>
                <Routes>

                    <Route path="admin" element={<AdminScreen />} />
                    <Route path="sections" element={<SectionScreen />} />
                    <Route path="teacher" element={<TeacherScreen />} /> 

                </Routes>

            </div>
        
        </>

    )
}

