import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'



function header() {
  return (
  	<header class="header">
		<h1 class="logo"><a href="#">Assetwarranty</a></h1>
      <ul class="main-nav">
          
          <li><a href="#" class='profile'>Profile</a></li>
      </ul>
	</header> 


  );
}

export default header;
