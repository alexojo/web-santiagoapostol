import { typesUser } from '../../../../redux/types/types';

export const NavsAdmin = [
    {
        user: typesUser.userAdmin,
        name: 'Estudiantes',
        link: '/students',
        icon: 'fa-solid fa-graduation-cap'
    },
    {
        user: typesUser.userAdmin,
        name: 'Secciones',
        link: '/sections',
        icon: 'fa-solid fa-chalkboard'
    },
    {
        user: typesUser.userAdmin,
        name: 'Docentes',
        link: '/admin',
        icon: 'fa-solid fa-user-tie '
    },
    {
        user: typesUser.userAdmin,
        name: 'Año Escolar',
        link: '/admin',
        icon: 'fa-solid fa-calendar'
    },
    {
        user: typesUser.userAdmin,
        name: 'Cursos',
        link: '/admin',
        icon: 'fa-solid fa-book'
    }
]

export const NavsSecretary = [
    {
        user: typesUser.userAdmin,
        name: 'Estudiantes',
        link: '/admin',
        icon: 'fa-solid fa-graduation-cap'
    }
]