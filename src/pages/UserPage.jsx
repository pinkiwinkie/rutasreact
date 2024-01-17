import React from "react";
import { useParams } from "react-router-dom";


export default function UserPage(){
  //const params = useParams(); todos los parametros
  const {id} = useParams();

  //console.log(params);
  return (
    <div>
      Paso de parámetros
      <br />
      User <h1>{id}</h1>
    </div>
  );
}