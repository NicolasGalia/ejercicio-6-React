import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AdminColores = () => {
    return (
   <div className="contenedor">
  <Form >
    <h1>Administrar colores</h1>
      <Form.Group >
        <Form.Label>Elija un color</Form.Label>
        <Form.Control type="text" placeholder="por ej: naranja" />
     </Form.Group>
      <Button variant="primary" type="submit" className="btn">
        Enviar
      </Button>
    </Form>
   </div>
    );
};

export default AdminColores;