import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar(){
  return (
    <div>
      <ul>
        <li>
        <NavLink to='/'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/nosotros'>Nosotros</NavLink>
        </li>
        <li>
        <NavLink to='/contacto'>Contacto</NavLink>
        </li>
      </ul>
    </div>
  );
}