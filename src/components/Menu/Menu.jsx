import { NavLink, Outlet } from "react-router-dom";
import './Menu.css' 

export function Menu() {
  return (
    <>
        <h2>Menu</h2>
        <div className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/card">Card</NavLink>
            <NavLink to="/smarthome">Smarthome</NavLink>
            <NavLink to="/vacation">Vacation</NavLink>
            <NavLink to="/data">Data</NavLink>  
        </div>

        <Outlet />
    </>
  );
}

// Outlet ist Inhalt der Seite, wenn menu zb im footer sein soll kann man das Outlet tag obendrüber schreiben
//Navlink ist wie link, bekommt aber intern den classname active mit, ist zb underlined wenn man sich auf entsprechender seite befindet