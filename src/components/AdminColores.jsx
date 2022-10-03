import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AdminColores = () => {
    return (
   <div>
  <Form>
      <Form.Group className="m-5" >
        <Form.Label>Elija un color</Form.Label>
        <Form.Control type="text" placeholder="por ej: naranja" />
     </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
   </div>
    );
};

export default AdminColores;