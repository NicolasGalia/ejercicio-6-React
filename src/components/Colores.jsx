import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Colores = (props) => {
    return (
        <div>
    <Card>
      <Card.Body >
        <Card.Title>color 1</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Borrar</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Colores;