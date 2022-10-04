import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AdminColores = () => {
  //aqui va la logica 
const storageColores = JSON.parse(localStorage.getItem('Colores')) || {};

const [color, setColor] = useState("");
const [arrayColor, setArrayColor] = useState(storageColores);

useEffect(() => {
  localStorage.setItem("Colores", JSON.stringify(arrayColor));
}, [arrayColor]);

    return (
   <div className="contenedor">
  <Form >
    <h1>Administrar colores</h1>
      <Form.Group >
        <Form.Label>Elija un color</Form.Label>
        <Form.Control type="text" placeholder="por ej: naranja" onChange={(e)=> console.log(e.target.value)}/>
     </Form.Group>
      <Button variant="primary" type="submit" className="btn">
        Enviar
      </Button>
    </Form>
   </div>
    );
};

export default AdminColores;