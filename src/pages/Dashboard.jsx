import React from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";


export default function Dashboard(){

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Logout</button>
      <br />
      <Link to='bienvenido'>
        Click para saludo
      </Link>
      <br />
      <Link to='despedida'>
        Click para despedida
      </Link>
      <Outlet />
    </div>
  );
}