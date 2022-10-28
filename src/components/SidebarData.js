import React from 'react';
//import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const sidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Calculadora IDI',
        path: '/calc',
        icon: <AiIcons.AiFillCalculator />,
        cName: 'nav-text'
    },
    {
        title: 'IDI Diario',
        path: '/diario',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    }
]

