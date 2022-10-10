import React from "react";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";

const Color = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      color 1
      <Button variant="success">Borrar</Button>
    </ListGroup.Item>
  );
};

export default Color;
