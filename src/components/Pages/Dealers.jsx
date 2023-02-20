import React from "react";
import "./Dealers.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";

const Dealers = () => {
  return (
    <div>
      <>
        <Navbar style={{ backgroundColor: "#461b7e" }} variant="dark">
          <Container>
            <Navbar.Brand href="#home">AssetWarranty</Navbar.Brand>
          </Container>
        </Navbar>
      </>
      <br />
      <h1 className="title">List of Dealers</h1>

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Dealers;
