import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Color from "./Color";
import Container from "react-bootstrap/Container";

const Colores = ({propsArregloColor, borrarColor}) => {
  return (
    <Container>
    <ListGroup>
  {
  propsArregloColor.map((color, posicion) => <Color key={posicion} nombreColor={color} borrarColor={borrarColor}></Color>)
}

    </ListGroup>
    </Container>
  );
};

export default Colores;