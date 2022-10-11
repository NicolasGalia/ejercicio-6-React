import React from "react";
import { Button, Card} from "react-bootstrap";

const Color = ({nombreColor, borrarColor}) => {
  return (
    <Card className="d-flex justify-content-between">
      
        <Card.Header>{nombreColor}</Card.Header>
        <Card.Body style = {{backgroundColor: nombreColor}}>

        </Card.Body>
        <Card.Footer>
        <Button variant="success" onClick={()=> borrarColor(nombreColor)}>Borrar</Button>
        </Card.Footer>
        </Card>
  );
};

export default Color;
