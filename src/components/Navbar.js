import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import { sidebarData } from "./SidebarData.js";
import './Navbar.css'
import { IconContext } from "react-icons";
import icon from '../assets/icon.ico';

function Navbar() {
    const [sidebar,setSidebar] = React.useState(true);

    function showSidebar(){
        setSidebar(prevState => !prevState)        
    }

  return (
    <>
        <IconContext.Provider value={{color:'#fff'}}>
        <div className='navbar'>
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>            
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaWindowClose />
                    </Link>
                </li>
                <li className='nav-text'>
                    <img src={icon} alt="logo banco" className='logo-banco'/>
                </li>
                {sidebarData.map((item,index)=>{
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                }
                )}
            </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar