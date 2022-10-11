import React from "react";
import {ListGroup, Button} from "react-bootstrap";

const Color = ({nombreColor, borrarColor}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
     {nombreColor}
      <Button variant="success" onClick={()=> borrarColor(nombreColor)}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default Color;
