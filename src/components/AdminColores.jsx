import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Colores from "./Colores";

const AdminColores = () => {

  return (
    <Container>
    <Form className="formulario">
  <Form.Group className ="titulo">Administrar Colores</Form.Group>
    <Form.Group className="mb-3 elegirColor" >
      <Form.Label>Elija un color</Form.Label>
      <Form.Control type="text" placeholder="Por ej: Naranja"/>
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