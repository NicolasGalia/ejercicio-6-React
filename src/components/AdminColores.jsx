import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Colores from "./Colores";
import Swal from "sweetalert2";
import { validarColor, colores } from "../colorElegido";



const AdminColores = () => {
  // aqui va la logica
  const coloresLocalStorage = JSON.parse( localStorage.getItem(`listaColores`)) || [];
  const [color, setColor] = useState("");
  const [arrayColor, setArrayColor] = useState(coloresLocalStorage);

  //ciclo de vida del componente 
useEffect(() => {
localStorage.setItem(`listaColores`, JSON.stringify(arrayColor));
},[arrayColor])

const agregarColor = () => {
  if (!validarColor(color) || !color.trim()) {
    Swal.fire({
      icon: "info",
      html: "<p>Indica un color, prueba en <strong>Ingles</strong><br>Ej: blue, red, deepOrange</p>",
    });
    setColor("");
    return;
  } else {
    setArrayColor([...arrayColor, color]);
    setColor("");
  }
};


const borrarColor = (nombre)=>{
let arregloModificado = arrayColor.filter((item)=> item !== nombre);
//actualizar el state 
setArrayColor(arregloModificado);

}

  return (
    <Container>
      <Form className="formulario" onSubmit= {agregarColor}>
        <Form.Group className="titulo">Administrar Colores</Form.Group>
        <Form.Group className="mb-3 elegirColor">
          <Form.Label>Elija un color</Form.Label>
          <Form.Control
            type="text"
            placeholder="Por ej: Naranja"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
        </Form.Group>
        <Button variant="warning" type="submit" className="boton">
          Enviar
        </Button>
      </Form>
      <Colores propsArregloColor={arrayColor} borrarColor={borrarColor}></Colores>
    </Container>
  );
};

export default AdminColores;
