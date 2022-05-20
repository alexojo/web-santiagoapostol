import React from 'react'
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import { SideBar } from '../screens/users/components/SideBar/SideBar';

import { AdminScreen } from '../screens/users/screens/admin/AdminScreen';
import { SectionScreen } from '../screens/users/screens/SectionScreen';
import { SectionsScreen } from '../screens/users/screens/SectionsScreen';
import { StudentScreen } from '../screens/users/screens/student/StudentScreen';
import { StudentsScreen } from '../screens/users/screens/StudentsScreen';
import { TeacherScreen } from '../screens/users/screens/teacher/TeacherScreen';
import { TeachersScreen } from '../screens/users/screens/TeachersScreen';


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
                    <Route path="*" element={<Navigate to="admin" replace />} />
                    
                </Routes>

            </div>
        
        </>

    )
}

