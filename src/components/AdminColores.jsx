import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Colores from "./Colores";

const AdminColores = () => {
  // aqui va la logica
  const [color, setColor] = useState("");
  const [arrayColor, setArrayColor] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArrayColor([...arrayColor, color]);
    setColor("")
  };

  return (
    <Container>
      <Form className="formulario" onSubmit={handleSubmit}>
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
      <Colores></Colores>
    </Container>
  );
};

export default AdminColores;
