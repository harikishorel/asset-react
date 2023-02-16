import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#461b7e" }} variant="dark">
        <Container>
          <Navbar.Brand href="#home">AssetWarranty</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
