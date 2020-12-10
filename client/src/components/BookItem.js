import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import axios from 'axios';

import logo from "../assets/logo.jpg";

const BookItem = ({ book, updateBooks }) => {
  const user = localStorage.getItem("user");

  const deleteItem = async (id) => {
   const res = await axios.get(`http://localhost:8090/Rest/Api/livre/deleteLivre/${id}`)
   const newBooks = res.data;
   updateBooks(newBooks)
  }

  return (
    <Card
      style={{
        width: "25%",
        height: "100%",
        maxHeight: "300px",
        margin: "10px",
      }}
    >
      <CardImg
        style={{ width: "100%", height: "40%" }}
        src={logo}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">{book.nom}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {book.auteur}
        </CardSubtitle>
        <CardText>{book.desciption}</CardText>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button color="dark">Download</Button>
          <Button color="danger" onClick={() => deleteItem(book.id)}>X</Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default BookItem;
